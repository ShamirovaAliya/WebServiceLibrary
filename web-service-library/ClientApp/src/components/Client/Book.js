import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const Book = () => {
    return (
        <form style={{ display: 'flex', flexDirection: 'row' }} className="cont mt-4">
            <MyInput
                type='text'
                placeholder='Автор'
            />
            <MyInput
                type='text'
                placeholder='Жанр'
            />
            <MyInput
                type='text'
                placeholder='Издатель'
            />

            <MyButton>Искать</MyButton>
        </form>
    );
};

export default Book;