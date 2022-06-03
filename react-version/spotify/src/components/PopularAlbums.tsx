import { useState, useEffect } from "react";
import { Spotify } from "./spotify";

interface Album{
  id: string
}

function PopularAlbums( props : Album ) {
  const { popularAlbums } = Spotify();
  const [album, setAlbum] = useState({ 
    id: "",
    images: [{ url: "" }, { url: "" }, { url: "" }],
    name: "",
    release_date: "",
    external_urls: { spotify: ""},
    duration_ms: 0,
    artists: [ { name: ""} ]
  });

  useEffect(() => {
    popularAlbums(props.id).then((data) => {
      setAlbum(data);
    });
  }, []);

  return (
    <a className="card-container" target='_blank' rel="noreferrer" href={album.external_urls.spotify} key={album.id}>
        <img className="card-image" src={album.images[1].url} alt={album.name} />
        <h3 className="card-head">{album.name}</h3>
        <div>
            <span className="card-date">{album.artists[0].name}</span>
        </div>    
    </a>
  );
}

export default PopularAlbums;
