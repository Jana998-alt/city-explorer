import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Weather from './weather';



class WeatherDay extends React.Component{
//pass the object for the day. 
    render(){
        return(
        <tbody>
                <tr>
                <td>{this.props.dayDataObject.date}</td>
                <td>{this.props.dayDataObject.description}</td>
                </tr>
        </tbody>
        )
    }
}

export default WeatherDay;