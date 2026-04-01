import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render() {
    return(
      <div id="weather">
        <Container style={{ width: '18rem' }}>
          <h3>Weather:</h3>
          {this.props.weather.map((day, idx) => (
            <WeatherDay
              key={idx}
              day={day}
            />
          ))
          }
        </Container>
      </div>
    );
  }
}

export default Weather;
