import { AiFillPlayCircle } from "react-icons/ai";
import Button from "../UI/Buttton";
import Update from "../Modal/Update";
import Wrapper from "../UI/wrapper"
import Box from "../UI/Box";
import Img from "../UI/Img";
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
    <Wrapper justifyContent={"space-between"}>
      <Wrapper>
        <Box width={'fit-content'} fontSize={'1.5rem'} >
          <AiFillPlayCircle />
        </Box>
        <Box width={'4rem'} height={'4rem'} ml={'0.5rem'} textAlign={'center'} borderRadius={'50%'} color={'white'}>
          <Img src={musician} alt="Music"/>
          </Box>
      </Wrapper>
      <Box color={'black'} fontWeight={'bold'} fontSize={'large'}>{props.musicName}</Box>
      <Box>{props.artistName}</Box>
      <Box fontSize={'small'}>{props.duration}</Box>
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
          <Box fontSize={'larger'} fontWeight={'bold'} borderRadius={'50%'} width={'2rem'} height={'2rem'}>...</Box>
        </Button>
        
      )}
    </Wrapper>
  );
};

export default MusicList;
