import React from 'react';

const Result = props => {

    const { value, city, date, error, pressure, sunrise, sunset, temp, wind } = props.weather;
    let content = null;

    if (!error && value) {

        // * 1000 because of the milisecond problem 
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

        content = (
            <React.Fragment>
                <h2>Wyniki wyszukiwania dla miejscowości: <em>{city}</em></h2>
                <h3>Dane dla dnia i godziny: {date}</h3>
                <h3>Aktualna temperatura: {temp} <em>&#176;C</em></h3>
                <h3>Wschód słońca dzisiaj o: {sunriseTime}</h3>
                <h3>Zachód słońca dzisiaj o: {sunsetTime}</h3>
                <h3>Aktualna siła wiatru: {wind} <em>m / s</em></h3>
                <h3>Aktualne ciśnienie: {pressure} <em>hPa</em></h3>
            </React.Fragment>
        )
    }

    // error is true, when we don't have a city in API
    return (
        <div className="result">
            {error && value !== '' ? <p>Nie mamy w bazie: <em>{city}</em></p> : content}
        </div>
    );
}

export default Result;