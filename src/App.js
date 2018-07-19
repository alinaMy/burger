import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  person: [
    {name: "Alina", age: 30},
    {name: "Jonathan", age: 3},
    {name: "Leah", age: 1},
  ]
};

switchNameHandler = () => {
  this.setState({
    person: [
      {name: "Alina Myunster", age: 30},
      {name: "Jonathan", age: 3},
      {name: "Leah", age: 1},
    ]
  })
}

  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a react app</h1>
        <p> This is realy working </p>
        <button onClick = {this.switchNameHandler}> switch the name </button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}> My hobbie: tennis</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
