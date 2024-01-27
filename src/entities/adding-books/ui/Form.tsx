import {yupResolver} from '@hookform/resolvers/yup';
import RN from 'components/RN';
import {Button} from 'components/button';
import TextInput from 'components/text-input/TextInput';
import React, {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {SIZES} from 'shared/lib';
import {booksFormSchema} from 'shared/lib/form';
import {genRandomImg} from 'shared/lib/utils';
import {useBooksStore} from 'shared/store/books-store';
import {Book} from 'shared/types';

interface FormProps {
  onClose?(): void;
}

export const Form: FC<FormProps> = ({onClose}) => {
  const {addNewBook, books} = useBooksStore();
  const {handleSubmit, control, reset} = useForm({
    defaultValues: {
      title: '',
      author: '',
      publisher: '',
      year: '',
    },
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(booksFormSchema),
  });

  const actions = {
    onClose: () => {
      onClose?.();
      reset();
    },
    onSubmit: handleSubmit(async formData => {
      const data = {
        ...formData,
        image_url: genRandomImg(books),
      };
      addNewBook(data);
      actions.onClose();
    }),
  };

  return (
    <RN.View g={10}>
      <Controller
        control={control}
        name={'title'}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <TextInput
            value={value ?? ''}
            onChange={onChange}
            placeholder="Название"
            style={styles.input}
            error={error}
          />
        )}
      />
      <Controller
        control={control}
        name={'author'}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <TextInput
            value={value ?? ''}
            onChange={onChange}
            placeholder="Автор"
            style={styles.input}
            error={error}
          />
        )}
      />
      <Controller
        control={control}
        name={'publisher'}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <TextInput
            value={value ?? ''}
            onChange={onChange}
            placeholder="Издатель"
            style={styles.input}
            error={error}
          />
        )}
      />
      <Controller
        control={control}
        name={'year'}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <TextInput
            value={value ?? ''}
            keyboardType="numeric"
            onChange={onChange}
            placeholder="Год"
            style={styles.input}
            error={error}
          />
        )}
      />

      <Button
        text="Добавить книгу"
        backgroundColor="blackThree"
        color="whith"
        onPress={actions.onSubmit}
      />
      <Button
        text="Отмена"
        backgroundColor="error"
        color="whith"
        onPress={actions.onClose}
      />
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  input: {
    width: SIZES.width * 0.8,
  },
});
