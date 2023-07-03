import React from 'react';

const Card = ({ character }) => {
  const { name, imageUrl, _id, tvShows } = character;
  return (
    <div className="card-container" key={_id}>
      <img alt={`disney character ${name}`} src={imageUrl} />
      <h2>{name}</h2>
      <p>{tvShows}</p>
    </div>
  );
};

export default Card;