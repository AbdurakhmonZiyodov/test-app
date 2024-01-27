import React from 'react';
import RN from 'components/RN';
import TextInput from 'components/text-input/TextInput';
import {Controller, useForm} from 'react-hook-form';
import {SIZES} from 'shared/lib';
import {yupResolver} from '@hookform/resolvers/yup';
import {usersFormSchema} from 'shared/lib/form';
import DatePicker from 'react-native-date-picker';

export const Form = () => {
  const {handleSubmit, control} = useForm({
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
      {/* <Controller
        control={control}
        name={'dob'}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <TextInput
            value={value ?? ''}
            onChange={onChange}
            placeholder="Дата рождения"
            style={styles.input}
            error={error}
          />
        )}
      /> */}

      <Controller
        control={control}
        name={'dob'}
        render={({field: {value, onChange}}) => (
          <DatePicker
            locale="ru"
            title={null}
            mode={'date'}
            onConfirm={val => onChange(val)}
            // onCancel={() => setOpen(false)}
            open={true}
            modal={true}
            confirmText={'Сохранить'}
            cancelText={'Отменить'}
            date={value ? new Date(value) : new Date()}
          />
        )}
      />
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  input: {
    width: SIZES.width * 0.8,
  },
});
