import React from 'react';
import './Users.css';

const Users = () => {
    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>Пароль</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <button type="button" class="btn btn-outline-success m-1">Установить пароль</button>
                        <button type="button" class="btn btn-outline-danger">Удалить</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Users;

//import React, { Component } from 'react';

//export class Users extends Component {
//    static displayName = Users.name;

//    constructor(props) {
//        super(props);
//        this.state = { forecasts: [], loading: true };
//    }

//    componentDidMount() {
//        this.populateWeatherData();
//    }

//    static renderForecastsTable(forecasts) {
//        return (
//            <table className='table table-striped' aria-labelledby="tabelLabel">
//                <thead>
//                    <tr>
//                        <th>Date</th>
//                        <th>Temp. (C)</th>
//                        <th>Temp. (F)</th>
//                        <th>Summary</th>
//                    </tr>
//                </thead>
//                <tbody>
//                    {forecasts.map(forecast =>
//                        <tr key={forecast.date}>
//                            <td>{forecast.date}</td>
//                            <td>{forecast.temperatureC}</td>
//                            <td>{forecast.temperatureF}</td>
//                            <td>{forecast.summary}</td>
//                        </tr>
//                    )}
//                </tbody>
//            </table>
//        );
//    }

//    render() {
//        let contents = this.state.loading
//            ? <p><em>Loading...</em></p>
//            : Table.renderForecastsTable(this.state.forecasts);

//        return (
//            <div>
//                <h1 id="tabelLabel" >Weather forecast</h1>
//                <p>This component demonstrates fetching data from the server.</p>
//                {contents}
//            </div>
//        );
//    }

//    async populateWeatherData() {
//        const response = await fetch('weatherforecast');
//        const data = await response.json();
//        this.setState({ forecasts: data, loading: false });
//    }
//}