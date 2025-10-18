import { useEffect, useRef, useState } from "react";
import "./VideoPlayer.css";

function VideoPlayer() {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  // ✅ On ajoute un état pour forcer l'utilisateur à cliquer avant la lecture
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
  const video = videoRef.current;
  const audio = audioRef.current;
    if (!video || !audio) return;

    audio.volume = 0; // volume initial

    // Fonction fade in / fade out sécurisée
    const fadeAudio = (targetVolume, duration = 1000) => {
      if (fadeIntervalRef.current) cancelAnimationFrame(fadeIntervalRef.current);

      const startVolume = audio.volume;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        let progress = Math.min(elapsed / duration, 1);

        // ✅ volume limité entre 0 et 1
        audio.volume = Math.min(Math.max(startVolume + (targetVolume - startVolume) * progress, 0), 1);

        if (progress < 1) {
          fadeIntervalRef.current = requestAnimationFrame(step);
        } else if (targetVolume === 0) {
          audio.pause(); // pause quand le volume est 0
        }
      };

      // ✅ play seulement si l'utilisateur a interagi
  if (targetVolume > 0 && audio.paused && userInteracted) audio.play();
      fadeIntervalRef.current = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
            video.play();
            fadeAudio(1, 1000);
          } else {
            fadeAudio(0, 1000);
            video.pause();
          }
        });
      },
      { threshold: [0, 0.8, 1] }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      if (fadeIntervalRef.current) cancelAnimationFrame(fadeIntervalRef.current);
    };
  }, [userInteracted]); // ⚠️ dépendance sur l'interaction utilisateur

  // ✅ bouton pour autoriser la lecture
  if (!userInteracted) {
    return (
      <div className="start-container">
        <button
          className="start"
          onClick={() => setUserInteracted(true)}
        >
          Start Video
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-[2240px] h-[800px] overflow-hidden">
      <video
        ref={videoRef}
        width="2240"
        height="800"
        style={{ width: "2240px", height: "800px", objectFit: "contain" }}
        muted
        controls
      >
        {/* Lire depuis public/media/show.mp4 si présent */}
        <source src="/media/show.mp4" type="video/mp4" /> src 
      </video>
      {/* Lire depuis public/media/Airbag.mp3 si présent */}
      <audio ref={audioRef} src="/media/Airbag.mp3" preload="auto" />
    </div>
  );
}

export default VideoPlayer;
