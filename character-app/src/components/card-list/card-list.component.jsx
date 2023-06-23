import { Component } from 'react';

class CardList extends Component {
    render() {
        console.log(this.props.characters)
        console.log('render cardlist')
        const { characters } = this.props
        return (
          <div>
            {characters.map((character) => {
              const { name, imageUrl, _id, tvShows } = character;
            return (
              <div className='card-container' key={_id}>
                <img 
                  alt={`disney character ${name}`}
                  src={imageUrl} 
                />
                <h2>{name}</h2>
                <p>{tvShows}</p>
              </div>
            )})}
          </div>
        );
    }
}


export default CardList;