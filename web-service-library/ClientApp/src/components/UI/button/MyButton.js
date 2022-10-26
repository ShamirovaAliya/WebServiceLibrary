import React from 'react';
import './MyButton.css';

const MyButton = ({ children, ...props }) => {
    return (
        <button {...props} className="myButton">
            {/*Специальный props, который называется children, чтобы внутри тега (button, p, div и т.д.) был виден текст*/}
            {children}
        </button>
    );
};

export default MyButton;