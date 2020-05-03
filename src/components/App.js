import React, { Component } from 'react';
import Form from './Form'
import Result from './Result'

const APIKey = 'efa2ef11f117f7485b2fca8e87a3a2f5';

class App extends Component {
  state = {
    value: '',
    city: '',
    data: '',
    sunrise: '',
    sunset: '',
    temp: '',
    wind: '',
    pressure: '',
    error: false,
  }

  handleCityChange = e => { // cotrols values
    this.setState({
      value: e.target.value,
    })
  }

  componentDidUpdate(prevProps, prevState) { // prevState is always second argument

    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

      fetch(API)
        .then(res => {
          if (res.ok) return res;
          throw Error('Nie udało się');
        })
        .then(res => res.json())
        .then(data => {
          const time = new Date().toLocaleString()
          this.setState({
            error: false,
            date: time,
            city: this.state.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            wind: data.wind.speed,
            pressure: data.main.pressure,
          })
        })
        .catch(err => {
          this.setState({
            error: true,
            city: this.state.value,
            date: '',
            sunrise: '',
            sunset: '',
            temp: '',
            wind: '',
            pressure: '',
          })
        })
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Sprawdź pogodę</h1>
        <Form
          value={this.state.value}
          handleCityChange={this.handleCityChange}
        />
        <Result
          weather={this.state}
        />
      </div>
    );
  }
}

export default App;