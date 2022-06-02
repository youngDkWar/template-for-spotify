import { useState, useEffect } from "react";
import { Spotify } from "./spotify";

interface Track{
  id: string
}

function SectionContent( props : Track ) {
  const { sectionEpisodes } = Spotify();
  const [episode, setEpisode] = useState({ 
    id: "",
    images: [{ url: "" }, { url: "" }, { url: "" }],
    name: "",
    release_date: "",
    external_urls: { spotify: ""},
    duration_ms: 0,
  });

  useEffect(() => {
    sectionEpisodes(props.id).then((data) => {
      setEpisode(data);
    });
  }, []);

  let release_date = new Date(episode.release_date).toUTCString().split(" ")

  return (
    <a className="card-container" target='_blank' href={episode.external_urls.spotify} key={episode.id}>
        <img className="card-image" src={episode.images[1].url} />
            <h3 className="card-head">{episode.name}</h3>
            <div>
              <span className="card-date">{release_date[1]} {release_date[2]}.</span>
              <span className="card-len"> {Math.round(episode.duration_ms / 60000)} МИН.</span>
        </div>    
    </a>
  );
}

export default SectionContent;
