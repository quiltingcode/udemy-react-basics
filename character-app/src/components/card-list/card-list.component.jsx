import '../card-list/card-list.style.css'
import Card from './card.component';

const CardList = ({ characters }) => (
    <div className="card-list">
      {characters.map((character) => {
        return <Card character={character} key={character._id} />;
      })}
    </div>
  );



export default CardList;