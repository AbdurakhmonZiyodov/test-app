import RN from 'components/RN';
import AddButton from 'components/add-button';
import Table from 'components/table';
import {AddingUsersModal} from 'features/adding-users';
import {UseVisibility} from 'hooks/useVisibility';
import {observer} from 'mobx-react-lite';
import React, {useCallback, useEffect, useRef} from 'react';
import {BASE_PADDING, COLORS} from 'shared/lib';
import {useUserStore} from 'shared/store/users-store';

const AddingUsers = () => {
  const {users, getUsers, sortType, sortUsers} = useUserStore();
  const modalRef = useRef<UseVisibility>(null);

  const onShowModal = useCallback(() => {
    modalRef.current?.show();
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <RN.View style={styles.container}>
      <AddButton onPress={onShowModal} />
      <Table
        title="Авторы"
        data={users}
        activeFilterType={sortType}
        rowData={[
          {
            title: 'id',
            key: 'id',
            onPress: () => sortUsers('id'),
          },
          {
            title: 'Имя',
            key: 'firstName',
            onPress: () => sortUsers('firstName'),
          },
          {
            title: 'Фамилия',
            key: 'lastName',
            onPress: () => sortUsers('lastName'),
          },
          {
            title: 'Отчество',
            key: 'middleName',
            onPress: () => sortUsers('middleName'),
          },
          {
            title: 'Дата рождения',
            key: 'dob',
            onPress: () => sortUsers('dob'),
          },
        ]}
      />
      <AddingUsersModal _ref={modalRef} />
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whiteOne,
    paddingHorizontal: BASE_PADDING,
  },
});

export default observer(AddingUsers);
