import React from 'react';
import ToDo from './ToDo';
import ToDoData from './ToDoData';
import './App.css';
//import { render } from '@testing-library/react';


class App extends React.Component {

  constructor() {
    super();
    this.state = { toDos: ToDoData };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(sel_id) {
    this.setState(prevState => {
      const updatedToDo = prevState.toDos.map(item => {
        if (item.id === sel_id) { item.checked = !item.checked }
        return item
      })
      return { toDos: updatedToDo }
    })
  }

  render() {
    const toDoitens = this.state.toDos.map(item => <ToDo key={item.id} item={item} handleChange={this.handleChange} />)
    return (<div className="text-center mb-4"> {toDoitens}</div >);
  }


}
export default App;
