import { useRef } from "react";
import Button from "../UI/Buttton";
import Input from "../UI/Input";
import ModalBg from "../UI/ModalBg"
import InputWrapper from "../UI/InputWrapper";
import { useSelector, useDispatch } from "react-redux";
import {
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
      dispatch(setMusicName(event.target.value));
    }  
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
      <ModalBg onClick={backToHomeHandler}></ModalBg>
      <InputWrapper>
        <h1>{props.Create_Music}</h1>
        <label htmlFor="music_name">Music Name</label>
        <Input type="text"
          id="music_name"
          placeholder="music name"
          onChange={musicNameHandler}
          onKeyDown={(event) => handleKeyDown(event, 0)}
          ref={(el) => (inputRefs.current[0] = el)}/>
        <br />
        <label htmlFor="artist_name">Artist Name</label>
        <Input
          type="text"
          id="artist_name"
          placeholder="artist name"
          onChange={artistNameHandler}
          onKeyDown={(event) => handleKeyDown(event, 1)}
          ref={(el) => (inputRefs.current[1] = el)}
        />
        <br />
        <label htmlFor="duration">Duration</label>
        <Input
          type="text"
          mx={'2.5rem'}
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
      </InputWrapper>
    </>
  );
};

export default CreateMusic;
