import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component{

    render(){
        return (
            <Card>
                <Card.Img variant="top" src={this.props.currentMovie.imageURL} />
                <Card.Body>
                    <Card.Title>{this.props.currentMovie.movieName}</Card.Title>

                    <Card.Text>{this.props.currentMovie.releaseDate}<br/>{this.props.currentMovie.overview}</Card.Text>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Total votes: {this.props.currentMovie.totalVotes}          </small>
                    <small className="text-muted">Average votes: {this.props.currentMovie.avgVotes}          </small>
                    <small className="text-muted">Popularity: {this.props.currentMovie.popularity}           </small>
                </Card.Footer>
            </Card>
        )}

}

export default Movie;