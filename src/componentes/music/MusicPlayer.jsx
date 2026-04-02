import { useAudio } from "../../context/AudioContextProvider.jsx";

//Crear el control de música//

function MusicPlayer() {
  const { isPlaying, playAudio, pauseAudio } = useAudio();

  const handleToggle = async () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      await playAudio();
    }
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        border: "none",
        borderRadius: "50%",
        width: "56px",
        height: "56px",
        cursor: "pointer"
      }}
    >
      {isPlaying ? "⏸" : "▶"}
    </button>
  );
}

export default MusicPlayer;