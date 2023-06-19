import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    fetch("https://api.disneyapi.dev/character")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { characters: users.data };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.characters.map((character) => {
          return (
            <div key={character._id}>
              <h1>{character.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
