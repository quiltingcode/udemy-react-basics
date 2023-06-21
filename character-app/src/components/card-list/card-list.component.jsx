import { Component } from 'react';

class CardList extends Component {
    render() {
        console.log(this.props.characters)
        console.log('render cardlist')
        const { characters } = this.props
        return (
          <div>
            {characters.map((character) => (
              <h1 key={character._id}>{character.name}</h1>
            ))}
          </div>
        );
    }
}


export default CardList;