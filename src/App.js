import React, { Component } from 'react';

class App extends Component {
  state = {
    students: 10
  };

  handleInput = e => {
    const value = e.target.value;

    const newValue = value < 1 ? 1 : value;

    this.setState({
      students: newValue
    });
  };

  changeNumber = e => {
    const name = e.target.name;

    const newNumber = this.state.students + (name === 'plus' ? 1 : -1);

    this.setState({
      students: newNumber
    });
  };

  render() {
    const { students } = this.state;
    const result = percentaged(1 - multi(366, students) / 366 ** students, 2);

    return (
      <div className="App">
        <h1>Birthday problem</h1>
        <h2>Number of people</h2>
        <p>
          <button
            className="change-count"
            name="minus"
            onClick={this.changeNumber}
          >
            -
          </button>
          <input type="number" value={students} onChange={this.handleInput} />
          <button
            className="change-count"
            name="plus"
            onClick={this.changeNumber}
          >
            +
          </button>
        </p>
        <p className="result">
          {students <= 366 && result === 100 && 'almost '}
          {result}&nbsp;%
        </p>
        <p>
          <a href="https://en.wikipedia.org/wiki/Birthday_problem">Wiki</a>
        </p>
      </div>
    );
  }
}

const multi = (a, b) => (a === 366 - b || b >= 100 ? 1 : a * multi(a - 1, b));

const percentaged = (number, dec) =>
  Math.round(100 * number * 10 ** dec) / 10 ** dec;

export default App;
