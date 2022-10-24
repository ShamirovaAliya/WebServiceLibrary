import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children} {/*����������� props, ������� ���������� children, ����� ������ ���� (button, p, div � �.�.) ��� ����� �����*/}
        </button>
    );
};

export default MyButton;