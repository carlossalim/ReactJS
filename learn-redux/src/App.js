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

  var msg = 'Hello Me';
  msg = msg.fontsize(33);
  msg = msg.italics();
  msg = msg.bold();

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2><i>{msg}</i></h2>
      <div className="container"></div>
      <h2 className=" border border-black">Counter {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <label htmlFor=""></label>
      <div className="container border border-dark"></div>
      <input type="text" name="" id="" />
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <input type="search" name="" placeholder="SEARCH" id="" />
      <input type="number" name="" placeholder="NUMBER" id="" />
      <input type="text" name="" id="" className="form-control-item"/>

      <input type="text" name="" id="myinput" className="form-control"/>


      {isLogged ? <h3>Secret information</h3> : ''}
    </div>
  );
}

export default App;
