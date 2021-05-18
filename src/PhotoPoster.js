import React from "react";

import "./PhotoPoster.css";

function PhotoPoster({ image, title }) {
  return <img className="photoPoster__thumbnail" src={image} alt={title} />;
}

export default PhotoPoster;
