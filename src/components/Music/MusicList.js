import { AiFillPlayCircle } from "react-icons/ai";
import Button from "../UI/Buttton";
import Update from "../Modal/Update";
import { useState } from "react";
import musician from "../../assets/Images/musician.jpg"
const MusicList = (props) => {
  const [isUpdateBtnClicked, setIsUpdateBtnClicked] = useState(false);

  const userInterfaceHandler = () => {
    if (isUpdateBtnClicked === false) {
      setIsUpdateBtnClicked(true);
      return;
    }
    setIsUpdateBtnClicked(false);
  };
  
  return (
    <div className="_wrapper">
      <div className="__play_image_group">
        <div className="__play_icon">
          <AiFillPlayCircle />
        </div>
        <div className="Music__image">
          <img src={musician} alt="Music" style={{ width: '100%', height: '100%',borderRadius:'50%',padding:'0'}}/>
          </div>
      </div>
      <div className="album__name">{props.musicName}</div>
      <div className="singer__name">{props.artistName}</div>
      <div className="music__duration">{props.duration}</div>
      {isUpdateBtnClicked ? (
        <>
          <Update 
           btnIsClicked={props.btnIsClicked}
           list={props.list}
          />
          <Button
            className="__others"
            color="#D72C4A"
            borderRadius="50%"
            onClick={userInterfaceHandler}
          >
            x
          </Button>
        </>
      ) : (
        <Button
          className="__others"
          color="black"
          p={0}
          borderRadius="50%"
          onClick={userInterfaceHandler}
        >
          ...
        </Button>
      )}
    </div>
  );
};

export default MusicList;
