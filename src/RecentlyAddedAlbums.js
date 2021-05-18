import React from "react";

import "./Albums.css";
import AlbumCard from "./AlbumCard";

function RecentlyAddedAlbums() {
  return (
    <div className="albums">
      <div className="albums__header">
        <div className="albums__headerTitle">
          <h3>Kürzlich erstellte Alben</h3>
        </div>
        <div className="albums__headerIcon">
          <h4>Alle Alben</h4>
        </div>
      </div>

      <div className="albumRow__list">
        <AlbumCard
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
          author="Justin"
          amount="23"
        />
        <AlbumCard
          image="images/album_cover_02.jpg"
          title="laughing in summer"
          author="Justin"
          amount="7"
        />
        <AlbumCard
          image="images/album_cover_03.jpg"
          title="love in sunset"
          author="Jessica"
          amount="10"
        />
        <AlbumCard
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
          author="Justin"
          amount="23"
        />
        <AlbumCard
          image="images/album_cover_02.jpg"
          title="laughing in summer"
          author="Justin"
          amount="7"
        />
        <AlbumCard
          image="images/album_cover_03.jpg"
          title="love in sunset"
          author="Jessica"
          amount="10"
        />
        <AlbumCard
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
          author="Justin"
          amount="23"
        />
        <AlbumCard
          image="images/album_cover_02.jpg"
          title="laughing in summer"
          author="Justin"
          amount="7"
        />
        <AlbumCard
          image="images/album_cover_03.jpg"
          title="love in sunset"
          author="Jessica"
          amount="10"
        />
        <AlbumCard
          image="images/album_cover_01.jpg"
          title="enjoying sunset"
          author="Justin"
          amount="23"
        />
        <AlbumCard
          image="images/album_cover_02.jpg"
          title="laughing in summer"
          author="Justin"
          amount="7"
        />
        <AlbumCard
          image="images/album_cover_03.jpg"
          title="love in sunset"
          author="Jessica"
          amount="10"
        />
      </div>
    </div>
  );
}

export default RecentlyAddedAlbums;
