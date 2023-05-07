import { useState,useRef } from "react";
import "./CreateMusic.css";
import Button from "../UI/Buttton";
const EditMusic = (props) => {
    const [musicName, setMusicName] = useState("");
    const [artistName, setArtistName] = useState("");
    const [duration, setDuration] = useState("");

    const backToHomeHandler = () => {
        props.ToHomeHandler(true);
      };

      /******************* */
      const inputRefs = useRef([]);
  
      const handleKeyDown = (event, index) => {
        if (event.key === 'Enter' && index !== 2) {
          const nextIndex = index === inputRefs.current.length - 1 ? 0 : index + 1;
          inputRefs.current[nextIndex].focus();
        }
      };
      /******************* */
  const musicNameHandler = (event) => {
    setMusicName(event.target.value);
  };
  const artistNameHandler = (event) => {
    setArtistName(event.target.value);
  };
  const durationHandler = (event) => {
    setDuration(event.target.value);
  };
  const onSubmitHandler = () => {
    if (
      musicName.trim() !== "" &&
      artistName.trim() !== "" &&
      duration.trim() !== ""
    ) {
      props.editBtnIsClicked({
        id:props.list.id,
        album_name: musicName,
        artist: artistName,
        duration: duration,
      })
      setMusicName("");
      setArtistName("");
      setDuration("");
      return;
    }
  };
    return (
        <>
        <div className="__modal__wrapper" onClick={backToHomeHandler}></div>
        <div className="__input__display">
          <h1>{props.Create_Music}</h1>
          <label htmlFor="music_name">Music Name</label>
          <input
            type="text"
            id="music_name"
            value={musicName}
            placeholder="music name"
            onChange={musicNameHandler}
            onKeyDown={(event) => handleKeyDown(event, 0)} ref={el => inputRefs.current[0] = el} 
          />{" "}
          <br />
          <label htmlFor="artist_name">Artist Name</label>
          <input
            type="text"
            id="artist_name"
            value={artistName}
            placeholder="artist name"
            onChange={artistNameHandler}
            onKeyDown={(event) => handleKeyDown(event, 1)} ref={el => inputRefs.current[1] = el} 
          />
          <br />
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            value={duration}
            placeholder="e.g: 4:21"
            onChange={durationHandler}
            onKeyDown={(event) => handleKeyDown(event, 2)} ref={el => inputRefs.current[2] = el} 
          />
          <br />
          <Button px={4} mx={1} variant="secondary" onClick={onSubmitHandler}>
            {props.create}
          </Button>
          <Button px={4} variant="cancel" onClick={backToHomeHandler}>
            cancel
          </Button>
        </div>
      </>
    )
}

export default EditMusic