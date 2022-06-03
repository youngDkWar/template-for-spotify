import { randomBytes, randomInt } from "crypto";
import React, { useState, useEffect } from "react";
import { Spotify } from "./spotify";

interface Track{
  id: string
}

function StartMainContent( props : Track ) {
  const { mainTracks } = Spotify();
  const [track, setTrack] = useState({ 
    id: "",
    album: { name: "", images: [{ url: "" }, { url: "" }] },
    name: "",
  });

  useEffect(() => {
    mainTracks(props.id).then((data) => {
      setTrack(data);
    });
  }, []);

  return (
    <a className="main-playlist" href="#">
      <img className="main-playlist-img" src={track.album.images[1].url} alt={track.name} />
      <span className="main-playlist-span">{track.name}</span>
      <div className="play-btn">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
        </svg>
      </div>
    </a>
  );
}

export default StartMainContent;
