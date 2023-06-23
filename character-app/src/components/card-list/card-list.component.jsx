import { Component } from 'react';

class CardList extends Component {
    render() {
        console.log(this.props.characters)
        console.log('render cardlist')
        const { characters } = this.props
        return (
          <div>
            {characters.map((character) => (
              <div className='card-container'>
                <img 
                  alt={`disney character ${character.name}`}
                  src={`https://robohash.org/${character._id}?set=set4&size=180x180`} 
                />
                <h2>{character.name}</h2>
                <p>{character.tvShows}</p>
              </div>
            ))}
          </div>
        );
    }
}


export default CardList;