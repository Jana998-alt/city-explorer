import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';

class Movies extends React.Component{

    generatingCards = () => {

        let currentCityMoviesData = this.props.currentCityMoviesData;

        return currentCityMoviesData.map((object)=>{
            return <Movie currentMovie={object}/>;
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