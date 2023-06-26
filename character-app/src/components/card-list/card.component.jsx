import React, { Component } from 'react';

class Card extends Component {
  render() {

    const { name, imageUrl, _id, tvShows } = this.props.character;
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