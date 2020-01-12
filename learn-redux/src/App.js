import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'
import moduleName from 'module'
function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()


  //DISPATCH
  //dispatch(increment());
  // store.dispatch(decrement());
  // store.dispatch(decrement());
  // store.dispatch(decrement());
  // store.dispatch(decrement());
  // store.dispatch(increment());
  // store.dispatch(increment());
  // store.dispatch(increment());
  // store.dispatch(increment());
  // store.dispatch(increment());
  // store.dispatch(increment());

  var msg = 'Hello Me';
  msg = msg.fontsize(33);
  msg = msg.italics();
  msg = msg.bold();

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2><i>{msg}</i></h2>
      <h2 className=" border border-black">Counter {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Secret information</h3> : ''}
    </div>
  );
}

export default App;
