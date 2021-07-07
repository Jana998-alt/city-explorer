import './App.css';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';


import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import reactDom from 'react-dom';

import Weather from './weather';



class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      cityName : '',
      lon: 0,
      lat: 0,
      show: false,
      showTable: false,
      currentCityWeatherData: [],
    }
  }

  getWeatherData = async() => {
    let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lon=${this.state.lon}&lat=${this.state.lat}`)

  
  this.setState({
    currentCityWeatherData : weatherData.data,
    showTable : true,
  })

  }

  getLocation = async (event) => {

    try{
      event.preventDefault();

   
    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${event.target.cityName.value}&format=json`;

    let locationData = await axios.get(url);

    await this.setState ({
      cityName : event.target.cityName.value,
      lon : locationData.data[0].lon,
      lat : locationData.data[0].lat,
      show: false,
    })
    
    console.log(this.state.lat + "   "+this.state.lon)

    await this.getWeatherData();
    console.log(this.state.currentCityWeatherData);
    }

   catch{
    this.setState ({
      show:true,
      cityName : '',
      lon: 0,
      lat: 0,
    })
   }


  }
  
  
  render() { 

    return(
    <div className="App">
      <header className="App-header">
        <h1>City Explorer!</h1>
      </header>
      
      <form onSubmit={this.getLocation}>
        <label className="formContent">Input city Name:</label>
        <br/>
        <input className="formContent" type="text" name="cityName"/>
        <br/>
        <button className="formContent" type="submit" >Explore!</button>
      </form>

      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.lon}&zoom=13`} alt={this.state.cityName}/>
      <Card.Header>
        {`${this.state.cityName}`}
        <br/>
        <Alert show={this.state.show} key='warning' variant='warning'>Error!</Alert>
        </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{`longitude: ${this.state.lon}`}</ListGroup.Item>
        <ListGroup.Item>{`latitude: ${this.state.lat}`}</ListGroup.Item>
      </ListGroup>
    </Card>

    <Weather showTable={this.state.showTable} currentCityWeatherData={this.state.currentCityWeatherData} />
    </div>
  )
}
}

export default App;




// https://jana-city-explorer.netlify.app/ 
