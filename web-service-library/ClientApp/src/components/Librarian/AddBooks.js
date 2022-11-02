import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const Books = () => {
    return (
        <form style={{ display: 'flex', flexDirection: 'row' }} className="cont mt-4">
            <MyInput
                type='text'
                placeholder='Книги'
            />

            <MyButton>Добавить книги</MyButton>
        </form>
    );
}

export default Books;