import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './movies.css' ;

class Movies extends React.Component{

    generatingCards = () => {

        let currentCityMoviesData = this.props.currentCityMoviesData;
        return currentCityMoviesData.map((object)=>{
            return  (
                <Card>
            <Card.Img variant="top" src={object.imageURL} />
                <Card.Body>
                    <Card.Title>{object.movieName}</Card.Title>

                    <Card.Text>{object.releaseDate}<br/>{object.overview}</Card.Text>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Total votes: {object.totalVotes}          </small>
                    <small className="text-muted">Average votes: {object.avgVotes}          </small>
                    <small className="text-muted">Popularity: {object.popularity}           </small>
                </Card.Footer>
          </Card>
          )
        })


    }



    render(){
        return(
            <>
                {this.generatingCards()}
            </>)
    }
}

export default Movies;