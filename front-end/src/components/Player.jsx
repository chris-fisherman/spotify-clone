/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackwardStep,
  faCirclePlay,
  faCirclePause,
  faForwardStep,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(':');
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);
  return seconds + minutes * 60;
};

const Player = ({
  duration,
  randomIdFromArtist,
  randomIdFromArtist2,
  audio,
}) => {
  // variables
  const audioPlayer = useRef();
  const barProgress = useRef();
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const [isPlaying, setIsPlaying] = useState(false);
  const durationInSeconds = timeInSeconds(duration);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime));
      barProgress.current.style.setProperty(
        '--_progress',
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + '%'
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  return (
    <div className='player-container'>
      <div className='player-controllers'>
        <Link
          to={`/song/${randomIdFromArtist}`}
          className='player-controllers__icon'
          title='Play a random song'
        >
          <FontAwesomeIcon icon={faBackwardStep} />
        </Link>
        <button className='player-controllers__icon--play'>
          <FontAwesomeIcon
            icon={isPlaying ? faCirclePause : faCirclePlay}
            title='Play'
            onClick={playPause}
          />
        </button>
        <Link
          to={`/song/${randomIdFromArtist2}`}
          className='player-controllers__icon'
          title='Play a random song'
        >
          <FontAwesomeIcon icon={faForwardStep} />
        </Link>
      </div>

      <div className='player-progress'>
        <p>{currentTime}</p>
        <div className='player-bar'>
          <div ref={barProgress} className='player-bar__progress'></div>
        </div>
        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
