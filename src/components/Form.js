import React from 'react';
import './Form.css'

const Form = props => {
    return (
        <form>
            <input type="text" placeholder="Wpisz miejscowość..." value={props.value} onChange={props.handleCityChange} />
        </form>
    );
}

export default Form;