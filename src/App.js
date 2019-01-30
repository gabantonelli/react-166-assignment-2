import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import "./App.css";

class App extends Component {
  state = {
    letters: []
  };

  printLength = e => {
    this.setState({ letters: e.target.value.split("") });
  };

  deleteLetterHandler = id => {
    const arrCopy = [...this.state.letters];
    arrCopy.splice(id, 1);
    this.setState({ letters: arrCopy });
  };

  render() {
    const letters = (
      <ul>
        {this.state.letters.map((letter, i) => {
          return (
            <CharComponent
              letter={letter}
              key={i}
              click={this.deleteLetterHandler.bind(this, i)}
            />
          );
        })}
      </ul>
    );

    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <input
          type="text"
          onChange={event => this.printLength(event)}
          value={this.state.letters.join("")}
        />
        <p>The current length is {this.state.letters.length}</p>
        <ValidationComponent length={this.state.letters.length} />
        {letters}
      </div>
    );
  }
}

export default App;
