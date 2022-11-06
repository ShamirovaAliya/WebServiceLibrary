﻿import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { Container } from 'reactstrap';

export class Layout extends Component {

    constructor(props) {
        super(props);

        this.adminRoutes = [
            {
                routeValue: '/Users',
                routeName: 'Пользователи'
            },
            {
                routeValue: '/AddUser',
                routeName: 'Добавить пользователей'
            }
        ];

        this.librarianRoutes = [
            {
                routeValue: '/Books',
                routeName: 'Книги'
            },
            {
                routeValue: '/AddBooks',
                routeName: 'Добавить книги'
            }
        ];

        this.clientRoutes = [
            {
                routeValue: '/Book',
                routeName: 'Книга'
            }
        ];
    }

    static displayName = Layout.name;

    render() {
        return (
            <div>
                {/*Маршрутизация. Прокладывание маршрута к ресурсам*/}
                <NavMenu routes={this.clientRoutes} />
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}