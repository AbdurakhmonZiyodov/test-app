import React, {FC} from 'react';
import RN from 'components/RN';
import TextInput from 'components/text-input/TextInput';
import {Controller, useForm} from 'react-hook-form';
import {SIZES} from 'shared/lib';
import {yupResolver} from '@hookform/resolvers/yup';
import {usersFormSchema} from 'shared/lib/form';
import {DateInput} from 'components/date-picker';
import {Button} from 'components/button';
import {useUserStore} from 'shared/store/users-store';

interface FormProps {
  onClose?(): void;
}

export const Form: FC<FormProps> = ({onClose}) => {
  const {addNewUser} = useUserStore();
  const {handleSubmit, control, reset} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      dob: '',
    },
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(usersFormSchema),
  });

  const actions = {
    onClose: () => {
      onClose?.();
      reset();
    },
    onSubmit: handleSubmit(async formData => {
      addNewUser(formData);
      actions.onClose();
    }),
  };

  return (
    <RN.View g={10}>
      <Controller
        control={control}
        name={'firstName'}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <TextInput
            value={value ?? ''}
            onChange={onChange}
            placeholder="Имя"
            style={styles.input}
            error={error}
          />
        )}
      />
      <Controller
        control={control}
        name={'lastName'}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <TextInput
            value={value ?? ''}
            onChange={onChange}
            placeholder="Фамилия"
            style={styles.input}
            error={error}
          />
        )}
      />
      <Controller
        control={control}
        name={'middleName'}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <TextInput
            value={value ?? ''}
            onChange={onChange}
            placeholder="Отчество"
            style={styles.input}
            error={error}
          />
        )}
      />
      <Controller
        control={control}
        name={'dob'}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <DateInput
            value={value}
            onChange={onChange}
            placeholder="Дата рождения"
            error={error}
          />
        )}
      />

      <Button
        text="Добавить автора"
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