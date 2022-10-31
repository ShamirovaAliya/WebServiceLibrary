import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const AddUser = () => {
    return (
        <form style={{ display: 'flex',  flexDirection: 'row' }} className="cont mt-4">
            <MyInput
                type='text'
                placeholder='Электронная почта'
            />
            <MyInput
                type='text'
                placeholder='Пароль'
            />

            <MyButton>Добавить пользователя</MyButton>
        </form>
    );
};

export default AddUser;