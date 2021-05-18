import React from "react";

import "./AlbumCard.css";

function AlbumCard({ image, title, author, amount }) {
  return (
    <div className="albumCard">
      <img className="albumCard__thumbnail" src={image} alt="" />
      <h4>{title}</h4>
      <p>von {author}</p>
      <p>{amount} Bilder</p>
    </div>
  );
}

export default AlbumCard;
