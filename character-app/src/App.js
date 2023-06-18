import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      princesses: [
        {
          name: 'Belle',
        },
        {
          name: 'Ariel',
        },
        {
          name: 'Rapunzel',
        },
        {
          name: 'Vaiana',
        },
      ]
      
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.princesses.map((princess) => {
          return (
            <h1 key={princess.id}>{princess.name}</h1>
          )
          
        })}
      </div>
    );
  }
}

export default App;
