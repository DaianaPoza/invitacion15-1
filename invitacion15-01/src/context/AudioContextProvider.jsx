import { createContext, useContext, useEffect, useRef, useState } from "react";
import musica from "../assets/Keane.mp3";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(musica);
    audioRef.current.loop = true;
    audioRef.current.preload = "auto";

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const playAudio = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("No se pudo reproducir el audio:", error);
    }
  };

  const pauseAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <AudioContext.Provider value={{ playAudio, pauseAudio, isPlaying }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}