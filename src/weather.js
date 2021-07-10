import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './weather.css';
import WeatherDay from './weatherDay';

class Weather extends React.Component{
    // currentCityWeatherData
    handleTableData() {
        let currentCityWeatherData = this.props.currentCityWeatherData; 

        let dailyWeatherArray = currentCityWeatherData.map((dayDataObject)=>{
            console.log(currentCityWeatherData);
            return <WeatherDay dayDataObject={dayDataObject}/>
            
        })
            
        return dailyWeatherArray;
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