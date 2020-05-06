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
                <table className="weather">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Dane dla dnia i godziny:</td>
                            <td>{date}</td>
                        </tr>
                        <tr>
                            <td>Aktualna temperatura:</td>
                            <td>{temp} <em>&#176;C</em></td>
                        </tr>
                        <tr>
                            <td>Wschód słońca dzisiaj o:</td>
                            <td>{sunriseTime}</td>
                        </tr>
                        <tr>
                            <td>Zachód słońca dzisiaj o:</td>
                            <td>{sunsetTime}</td>
                        </tr>
                        <tr>
                            <td>Aktualna siła wiatru:</td>
                            <td>{wind} <em>m / s</em></td>
                        </tr>
                        <tr>
                            <td>Aktualne ciśnienie:</td>
                            <td>{pressure} <em>hPa</em></td>
                        </tr>
                    </tbody>
                </table>
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