import React from 'react';

const divStyle = {
    backgroundColor: "#D9EAF8",
    margin: "50px",
    padding: "30px",
    borderRadius: "15px",
};

export const Card = () => {
    return (
        <React.Fragment>
            <div style={divStyle}>
                <p>Question</p>
                <p>Answer</p>
                <p>Answer</p>
                <p>Answer</p>
            </div>
        </React.Fragment>
    );

};