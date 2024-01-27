import {sortBy} from 'lodash';
import {useCallback, useState} from 'react';
import $api from 'shared/api';
import {User} from 'shared/types';

export const useAddingUserModel = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [sortType, setSortType] = useState<keyof User>('id');

  const actions = {
    getUsers: useCallback(async () => {
      const response = await $api.getUsers();
      setUsers(response.data);
    }, []),
    sortByKey: useCallback(
      (key: keyof User) => {
        setSortType(key);
        const sortedUsers = sortBy([...users], [key]);
        setUsers(sortedUsers);
      },
      [users],
    ),
  };

  return {
    users,
    actions,
    sortType,
  };
};
