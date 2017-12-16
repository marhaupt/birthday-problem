import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    students: 23
  };

  handleInput = e => {
    this.setState({
      students: e.target.value
    });
  }

  render() {
    const {students} = this.state;

    return (
      <div className="App">
        <p>
          <input
            type="number"
            value={students}
            onChange={this.handleInput}
            />
        </p>
        <p>{ percentaged(1-multi(365, students) / (365 ** students), 2)}&nbsp;%</p>
      </div>
    );
  }
}

const multi = (a, b) => (
  a === 365 - b ? 1 : a * multi(a-1, b)
)

const percentaged = (number, dec) => (
  Math.round(100 * number * (10 ** dec)) / (10 ** dec)
)

export default App;
