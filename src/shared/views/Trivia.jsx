import React from 'react';
import { Card } from "../organisms/Card";

const counterStyle = {
    backgroundColor: "#D9EAF8",
    margin: "50px",
    padding: "30px",
    borderRadius: "15px",
};

const buttonStyle = {
    margin: "10px",
    fontSize: "20px",
};

const buttonNavigation = {
    align: "center"
};

export const Trivia = () => {
    return (
        <React.Fragment> 
            <p style={counterStyle}>COUNTER: 0/10</p>
            <Card />
            <div style={buttonNavigation}>
                <button style={buttonStyle}>Previous</button>
                <button style={buttonStyle}>Answer</button>
                <button style={buttonStyle}>Next</button>
            </div>
        </React.Fragment>
    );
};