import {sortBy} from 'lodash';
import {useCallback, useState} from 'react';
import $api from 'shared/api';
import {Book} from 'shared/types';

export const useAddingBooksModel = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [sortType, setSortType] = useState<keyof Book>('id');

  const actions = {
    getBooks: useCallback(async () => {
      const response = await $api.getBooks();
      setBooks(response.data);
    }, []),
    sortByKey: useCallback(
      (key: keyof Book) => {
        setSortType(key);
        const sortedBooks = sortBy([...books], [key]);
        setBooks(sortedBooks);
      },
      [books],
    ),
  };

  return {
    books,
    actions,
    sortType,
  };
};
