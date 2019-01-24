// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React component
const App = () => {
  const buttonText = 'Click me';
  const style = { backgroundColor: 'blue', color: 'white' };

  return (
    <div>
      <label htmlFor="name" className="label">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText}</button>
    </div>
  );
};

// Take the React component and show it on screen
ReactDOM.render(<App />, document.getElementById('root'));
