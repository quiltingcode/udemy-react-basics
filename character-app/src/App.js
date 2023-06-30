import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('');
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useEffect(() => {
    console.log('fetch fired')
    fetch("https://api.disneyapi.dev/character")
      .then((response) => response.json())
      .then((users) => setCharacters(users.data));
  }, []);

  useEffect(() => {
    const newFilteredCharacters = characters.filter((character) => {
      return character.name.toLowerCase().includes(searchField);
    });

    setFilteredCharacters(newFilteredCharacters);
    console.log('effect firing')
  }, [characters, searchField]);


  const handleChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  
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
 )
}


export default App;
