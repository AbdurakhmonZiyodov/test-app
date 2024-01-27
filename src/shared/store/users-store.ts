import {findIndex, sortBy} from 'lodash';
import {makeAutoObservable, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import $api from 'shared/api';
import {User} from 'shared/types';

type SortType = keyof User;

class UsersStore {
  users: User[] = [];
  sortType: SortType = 'id';

  constructor() {
    makeAutoObservable(this);
  }

  getUsers = async () => {
    const response = await $api.getUsers();
    runInAction(() => {
      this.users = response.data;
    });
  };

  sortUsers = (key: SortType) => {
    this.sortType = key;
    this.users = sortBy([...this.users], [key]);
  };

  addNewUser = (form: Omit<User, 'id'>, onEnd?: () => void) => {
    const data = Object.assign({id: this.users.length + 1}, form);
    this.users = [...this.users, data];
    onEnd?.();
  };

  udateUser = (form: Omit<User, 'id'>, id: number, onEnd?: () => void) => {
    const userIndex = findIndex(this.users, {id});
    if (userIndex !== -1) {
      this.users[userIndex] = {
        ...this.users[userIndex],
        ...form,
      };
    }

    onEnd?.();
  };

  removeUser = (id: number) => {
    this.users = this.users.filter(user => user.id !== id);
  };
}

const userStore = new UsersStore();

const UserStoreContext = createContext(userStore);
export const useUserStore = () => useContext(UserStoreContext);
