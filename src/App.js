// import './App.css';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { construct } from 'harmony-reflect';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import reactDom from 'react-dom';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      cityName : '',
      lon: 0,
      lat: 0, 
    }
  }

  getLocation = async (event) => {

   event.preventDefault();

    // let cityName = 
    let url = `https://eu1.locationiq.com/v1/search.php?key=pk.3130cae6529e5d2c225c5f40822dca62&q=${event.target.cityName.value}&format=json`;

  
    let theData = await axios.get(url);
    
    this.setState ({
      cityName : event.target.cityName.value,
      lon : theData.data[0].lon,
      lat : theData.data[0].lat
    })
    console.log(theData.data[0].lat);
  }
  
  
  render() { 

    return(
    <div className="App">
      <form onSubmit={this.getLocation}>
        <label>Input city Name:</label>
        <input type="text" name="cityName"/>
        <br/>
        <button type="submit" >Explore!</button>
      </form>

      <Card style={{ width: '18rem'}}>
      <Card.Header>{`${this.state.cityName}`}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{`longitude: ${this.state.lon}`}</ListGroup.Item>
        <ListGroup.Item>{`latitude: ${this.state.lat}`}</ListGroup.Item>
        
      </ListGroup>
    </Card>
    </div>
  )
}
}

export default App;




// https://jana-city-explorer.netlify.app/






{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}