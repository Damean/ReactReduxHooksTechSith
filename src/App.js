import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'

function App() {

  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
