import React from "react";

import "./RecentlyAddedPhotos.css";
import PhotoPoster from "./PhotoPoster";
import AlbumCard from "./AlbumCard";

function RecentlyTakenPhotos() {
  return (
    <div className="photos">
      <div className="photos__header">
        <h3>Kürzlich erstellte Fotos</h3>
        <div className="photos__headerIcon">
          <h4>Alle Fotos</h4>
        </div>
      </div>
      <div className="photos__list">
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
        <PhotoPoster
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
        />
      </div>
    </div>
  );
}

export default RecentlyTakenPhotos;
