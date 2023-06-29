import { Component } from 'react';
import '../card-list/card-list.style.css'
import Card from './card.component';

class CardList extends Component {
    render() {
        const { characters } = this.props
        return (
          <div className="card-list">
            {characters.map((character) => {
              return (
                <Card character={character} key={character._id}/>
              );
            })}
          </div>
        );
    }
}


export default CardList;