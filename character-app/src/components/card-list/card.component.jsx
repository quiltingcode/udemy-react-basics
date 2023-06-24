import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { character } = this.props;
    const { name, imageUrl, _id, tvShows } = character;
    return (
      <div className="card-container" key={_id}>
        <img alt={`disney character ${name}`} src={imageUrl} />
        <h2>{name}</h2>
        <p>{tvShows}</p>
      </div>
    );
  }
}

export default Card;