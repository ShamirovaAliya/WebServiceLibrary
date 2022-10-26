﻿import React, { Component } from 'react';
import AddUser from './Administrator/AddUser';
import Table from './Administrator/Table';
import './Home.css';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div className="home">
                <AddUser />
                <Table />
            </div>
        );
    }
}