import RN from 'components/RN';
import AddButton from 'components/add-button';
import Table from 'components/table';
import React, {useCallback, useEffect, useRef} from 'react';
import {BASE_PADDING, COLORS} from 'shared/lib';
import {useAddingUserModel} from './model';
import {AddingUsersModal} from 'features/adding-users';
import {UseVisibility} from 'hooks/useVisibility';

const AddingUsers = () => {
  const {
    actions: {sortByKey, getUsers},
    users,
    sortType,
  } = useAddingUserModel();
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
            onPress: () => sortByKey('id'),
          },
          {
            title: 'Имя',
            key: 'firstName',
            onPress: () => sortByKey('firstName'),
          },
          {
            title: 'Фамилия',
            key: 'lastName',
            onPress: () => sortByKey('lastName'),
          },
          {
            title: 'Отчество',
            key: 'middleName',
            onPress: () => sortByKey('middleName'),
          },
          {
            title: 'Дата рождения',
            key: 'dob',
            onPress: () => sortByKey('dob'),
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

export default AddingUsers;
