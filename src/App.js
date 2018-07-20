import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: "Alina", age: 30 },
      { name: "Jonathan", age: 3 },
      { name: "Leah", age: 1 },
    ],
    showPerson: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: 30 },
        { name: "Jonathan", age: 3 },
        { name: "Leah", age: 1 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      person: [
        { name: "Alina", age: 30 },
        { name: event.target.value, age: 3 },
        { name: "Leah", age: 1 },
      ]
    })
  }

  tooglePersonHandler = () => {
    let doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age} />
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(this, "Alina Myunster")}
            changed={this.nameChangedHandler}>
            My hobbie: tennis</Person>
          <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age} />
        </div>
      );
    };

    return (
      <div className="App">
        <h1> Hi, I'm a react app</h1>
        <p> This is realy working </p>
        <button
          style={style}
          onClick={this.tooglePersonHandler}> toogle persons </button>
        {persons}
      </div>
    );
  }
}

export default App;
