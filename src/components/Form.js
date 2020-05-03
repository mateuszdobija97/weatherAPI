import React from 'react';

const Form = props => {
    return (
        <form>
            <input type="text" placeholder="Wpisz miejscowość..." value={props.value} onChange={props.handleCityChange} />
        </form>
    );
}

export default Form;