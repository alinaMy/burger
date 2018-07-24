import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  state = {
    person: [
      { id: 1, name: "Alina", age: 30 },
      { id: 2, name: "Jonathan", age: 3 },
      { id: 3, name: "Leah", age: 1 },
    ],
    showPerson: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.person[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({
      person: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.person;
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({ person: persons });
  }

  tooglePersonHandler = () => {
    let doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    };

    const classes = [];
    if (this.state.person.length <= 2) {
      classes.push('red');
    }
    if (this.state.person.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App" >
        <h1> Hi, I'm a react app</h1>
        <p className = {classes.join(' ')}> This is realy working </p>
        <button
          style={style}
          onClick={this.tooglePersonHandler}> toogle persons </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
