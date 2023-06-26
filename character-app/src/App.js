import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  
  constructor() {
    
    super();
    this.state = {
      characters: [],
      searchField: '',
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
        )
      );
    }

    handleChange = (event) => {
      const searchField = event.target.value.toLowerCase();
      this.setState(() => {
        return { searchField };
      });
    }

  render() {
    console.log('render app')
    const { characters, searchField } = this.state;
    const { handleChange } = this;

    const filteredCharacters = characters.filter((character) => {
      return character.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'> Disney Characters </h1>
        <SearchBox 
          onChangeHandler={handleChange} 
          placeholder='search characters' 
          className='monsters-search-box' 
        />
        <CardList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
