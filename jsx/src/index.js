// Import react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me';
}

// Create a react component
const App = () => {
    const buttonText = 'Click Me Suren'
    return (
        <div>
            <label className="label" for="name">Enter Name:</label>
            <input id="name" type="text"></input>
            <button style={{ backgroundColor: 'blue',color:'white' }}>{buttonText}</button>
            <button style={{ backgroundColor: 'blue',color:'white' }}>{getButtonText()}</button>

        </div>
    );
};


// Take the react component and show it on the screen

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

