import {Book} from 'shared/types';

export function genRandomImg(books: Book[]): string {
  if (books.length > 0) {
    const randomIndex = Math.floor(Math.random() * books.length);

    return books[randomIndex].image_url;
  }
  return '';
}
