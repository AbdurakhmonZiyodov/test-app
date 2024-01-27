import {findIndex, sortBy} from 'lodash';
import {makeAutoObservable, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import $api from 'shared/api';
import {Book} from 'shared/types';

type SortType = keyof Book;

class BooksStore {
  books: Book[] = [];
  sortType: SortType = 'id';

  constructor() {
    makeAutoObservable(this);
  }

  getBooks = async () => {
    const response = await $api.getBooks();
    runInAction(() => {
      this.books = response.data;
    });
  };

  sortBooks = (key: SortType) => {
    this.sortType = key;
    this.books = sortBy([...this.books], [key]);
  };

  addNewBook = (form: Omit<Book, 'id'>, onEnd?: () => void) => {
    const data = Object.assign({id: this.books.length + 1}, form);
    this.books = [...this.books, data];
    onEnd?.();
  };

  udateBook = (form: Omit<Book, 'id'>, id: number, onEnd?: () => void) => {
    const bookIndex = findIndex(this.books, {id});
    if (bookIndex !== -1) {
      this.books[bookIndex] = {
        ...this.books[bookIndex],
        ...form,
      };
    }

    onEnd?.();
  };

  removeBook = (id: number) => {
    this.books = this.books.filter(book => book.id !== id);
  };
}

const booksStore = new BooksStore();

const BooksStoreContext = createContext(booksStore);
export const useBooksStore = () => useContext(BooksStoreContext);
