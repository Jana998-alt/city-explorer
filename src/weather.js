import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './weather.css';

class Weather extends React.Component{
    // currentCityWeatherData
    handleTableData() {
        let currentCityWeatherData = this.props.currentCityWeatherData; 
        let tableDataElements = [];
        for(let i=0; i<currentCityWeatherData.length;i++){
            tableDataElements.push(
                <tbody>
                <tr>
                <td>{currentCityWeatherData[i].date}</td>
                <td>{currentCityWeatherData[i].description}</td>
                </tr>
            </tbody>
            )
            console.log('hey hey');
           
        }
                
        return tableDataElements
    }

    render (){

        if(this.props.showTable){
        return(
            <>
            <p>Weather Forcast:</p>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Date</th>
                <th>Description</th>
                </tr>
            </thead>
            {this.handleTableData()}
            </Table>
            </>
        )
        }
        else {
            return (<></>)
        }

    }


}

export default Weather;