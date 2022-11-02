import React from 'react';
import './Books.css';

const Books = () => {
    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>Книга</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <button type="button" class="btn btn-outline-primary">Выдавать книги</button>
                        <button type="button" class="btn btn-outline-primary m-1">Принимать книги</button>
                        <button type="button" class="btn btn-outline-danger">Удалить книги</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Books;