import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log('fetch fired')
    fetch("https://api.disneyapi.dev/character")
      .then((response) => response.json())
      .then((users) => setCharacters(users.data));
  }, []);


  const handleChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

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
 )
}


export default App;
