import axios, {AxiosInstance} from 'axios';

const booksJson = require('./books.json');
const usersJson = require('./users.json');

class Api {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create();
  }

  public getUsers = async () => await this.api.get(usersJson);
  public getBooks = async () => await this.api.get(booksJson);
}

const $api = new Api();

export default $api;
