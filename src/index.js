// import libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () =>{
    const buttonName='submit';
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color:'white'}}>
                {buttonName}
            </button>
        </div>
    );
}
// Take the react compoennt and show it on the screen
ReactDOM.render(
    <App />,
    document.getElementById('root')
);