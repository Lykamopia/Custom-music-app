import { useRef } from "react";
import "./CreateMusic.css";
import Button from "../UI/Buttton";
import { useSelector, useDispatch } from "react-redux";
import {
  setId,
  setMusicName,
  setArtistName,
  setDuration,
  reset,
} from "../../features/CreateMusic/CreateMusicSlice";
import { addItemSuccess, updateItemSuccess } from "../../features/Data/DataSlice";
// import DeleteConfirm from "./DeleteConfirm";

const CreateMusic = (props) => {
  const { id, musicName, artistName, duration } = useSelector(
    (state) => state.music
  );
  const dispatch = useDispatch();
  const inputRefs = useRef([]);

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" && index !== 2) {
      const nextIndex = index === inputRefs.current.length - 1 ? 0 : index + 1;
      inputRefs.current[nextIndex].focus();
    }
  };

  const musicNameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      // dispatch(setId(Math.random())); //************************************** */
      dispatch(setMusicName(event.target.value));
    } //********************************************************************** */  
      // This is the place that must be edited setId must not be math.random()
      //********************************************************************** */
      // This is the place that must be edited setId must not be math.random()
      //********************************************************************** */
      // This is the place that must be edited setId must not be math.random()
      //********************************************************************** */
      
  };
  const artistNameHandler = (event) => {
    if (event.target.value.trim().length > 0)
      dispatch(setArtistName(event.target.value));
  };
  const durationHandler = (event) => {
    if (event.target.value.trim().length > 0)
      dispatch(setDuration(event.target.value));
  };
  const onSubmitHandler = () => {
    if (
      musicName.trim() !== "" &&
      artistName.trim() !== "" &&
      duration.trim() !== ""
    ) {
      if (props.create === "create") {
        dispatch(addItemSuccess({ id, artistName, musicName, duration }));
        dispatch(reset());
      } else {
        let id = props.list.id;
        dispatch(updateItemSuccess({ id, artistName, musicName, duration }));
      }
      props.ToHomeHandler(true);
      return;
    }
  };
  const backToHomeHandler = () => {
    props.ToHomeHandler(true);
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
          placeholder="music name"
          onChange={musicNameHandler}
          onKeyDown={(event) => handleKeyDown(event, 0)}
          ref={(el) => (inputRefs.current[0] = el)}
        />{" "}
        <br />
        <label htmlFor="artist_name">Artist Name</label>
        <input
          type="text"
          id="artist_name"
          placeholder="artist name"
          onChange={artistNameHandler}
          onKeyDown={(event) => handleKeyDown(event, 1)}
          ref={(el) => (inputRefs.current[1] = el)}
        />
        <br />
        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          id="duration"
          placeholder="e.g: 4:21"
          onChange={durationHandler}
          onKeyDown={(event) => handleKeyDown(event, 2)}
          ref={(el) => (inputRefs.current[2] = el)}
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
  );
};

export default CreateMusic;
