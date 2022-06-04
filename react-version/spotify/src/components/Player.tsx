import React, { useState, useEffect } from "react";

interface PlayerProps{
    url: string;
}

/**
 * Функция должна добавлять на страницу возможность проиграть музыку (но она не работает) 
 */
const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = (prop: PlayerProps) => {
  const [playing, toggle] = useAudio(prop.url);

  return (
    <div>
      <button onClick={ () => {
          toggle ;playing ? "Pause" : "Play"
        }
        }>
        </button>
    </div>
  );
};

export default Player;