import React, {useEffect, useRef} from 'react';
import RN from 'components/RN';
import Table from 'components/table';
import {useAddingBooksModel} from './model';
import {BASE_PADDING, COLORS} from 'shared/lib';
import AddButton from 'components/add-button';
import {UseVisibility} from 'hooks/useVisibility';

const AddingBooks = () => {
  const {
    actions: {getBooks, sortByKey},
    books,
    sortType,
  } = useAddingBooksModel();
  const modalRef = useRef<UseVisibility>(null);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <RN.View style={styles.container}>
      <AddButton
        onPress={() => {
          modalRef.current?.show();
        }}
      />

      <Table
        title="Книги"
        data={books}
        activeFilterType={sortType}
        rowData={[
          {
            key: 'id',
            title: 'id',
            onPress: () => sortByKey('id'),
          },
          {
            key: 'title',
            title: 'Название',
            onPress: () => sortByKey('title'),
          },
          {
            key: 'author',
            title: 'Автор',
            onPress: () => sortByKey('author'),
          },
          {
            key: 'publisher',
            title: 'Издатель',
            onPress: () => sortByKey('publisher'),
          },
          {
            key: 'year',
            title: 'Год',
            onPress: () => sortByKey('year'),
          },
          {
            key: 'image_url',
            title: 'Изображений',
            onPress: () => {},
          },
        ]}
      />
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

export default AddingBooks;
