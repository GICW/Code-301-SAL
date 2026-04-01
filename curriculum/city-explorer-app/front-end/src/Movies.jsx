import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Movie from './Movie';

class Movies extends React.Component {
  render() {
    return(
      <div id="movies">
        <Container style={{ width: '18rem' }}>
          <h3>Movies:</h3>
          {this.props.movies.length && this.props.movies.map((movie, idx) => (
            <Movie
              key={idx}
              movie={movie}
            />
          ))
          }
        </Container>
      </div>
    );
  }
}

export default Movies;
