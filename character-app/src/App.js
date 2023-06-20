import { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor() {
    console.log('constructor')
    super();
    this.state = {
      characters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
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
    console.log('render')

    const filteredCharacters = this.state.characters.filter((character) => {
      return character.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input 
          className="search-box" 
          type='search' 
          placeholder='search characters' 
          onChange={(event) => {
            console.log(event.target.value);
            const searchField = event.target.value.toLowerCase();
            

            this.setState(() => {
              return { searchField };
            })
          }} 
        />
        
        {filteredCharacters.map((character) => {
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
