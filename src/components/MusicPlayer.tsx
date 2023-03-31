import ReactPlayer from "react-player";
import { useState } from "react";

const MusicPlayer = () => {

  let [ url, setUrl ] = useState("https://youtu.be/aKVBZpJgY0A");
  let [ isPlaying, setIsPlaying ] = useState(false);
  let [ isLooping, setIsLooping ] = useState(false);
  
  const handlePlay = () => {
    setIsPlaying(true);
  }

  const handlePause = () => {
    setIsPlaying(false);
  }

  const handleToggleLoop = () => {
    setIsLooping(!isLooping);
  }

  const handleImportUrl = (value) => {
    if (!ReactPlayer.canPlay(value)) {
      alert("Please enter a valid YouTube URL.");
    } else {
      setUrl(value);
    }
  }

  return (
    <div className="card bg-white rounded-2 text-center mt-3">
      <p className="card-header fw-semibold"><i className="bi bi-music-note-beamed me-2"></i>Your music player</p>
      
      <div className="row card-body text-primary p-3 mt-3 mb-3">

        <div className="col-6 col-md-4">
          <ReactPlayer
            url={url}
            playing={isPlaying}
            width={142}
            height={80}
            loop={isLooping} />
        </div>

        <div className="col-md-8 d-grid gap-2">

          <div className="col input-group btn-group" role="group" aria-label="Basic outlined example">
            <button onClick={handlePlay} type="button" className="btn btn-outline-primary"><i className="bi bi-play me-2"></i>Play</button>
            <button onClick={handlePause} type="button" className="btn btn-outline-primary"><i className="bi bi-pause me-2"></i>Pause</button>
            <button onClick={handleToggleLoop} type="button" className="btn btn-outline-primary"><i className="bi bi-arrow-repeat me-2"></i>Loop</button>
          </div>

          <div className="col input-group">
            <input
              className="form-control"
              type="url"
              placeholder="Paste a YouTube URL here to play"
              id="importUrl"
            />
            <button className="btn btn-outline-primary" type="button" id="import" onClick={ () => handleImportUrl(importUrl.value) }>Import</button>
          </div>
        </div>
      
      </div>

    </div>
  )
}

export default MusicPlayer;