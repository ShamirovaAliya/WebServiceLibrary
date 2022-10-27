import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { Container } from 'reactstrap';

export class Layout extends Component {

    constructor(props) {
        super(props);

        this.adminRoutes = [
            {
                routeValue: '/',
                routeName: 'Пользователи'
            },
            {
                routeValue: '/AddUser',
                routeName: 'Добавить пользователей'
            }
        ];
    }

    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu routes={this.adminRoutes} />
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}