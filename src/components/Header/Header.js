import Button from "../UI/Buttton";
import HeaderStyle from "../UI/HeaderStyle";
import Wrapper from "../UI/wrapper"
import Title from "../UI/Title";

const Header = (props) => {
  const createMusicHandler = () => {
    props.createMusicModal(true);
  };
  return (
    <>
      <Wrapper justifyContent={'center'}>
        <HeaderStyle >
          <h1>Free Music For You!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum unde
            amet explicabo deserunt dolorem molestiae, eligendi nam itaque
            nobis. Soluta.
            <br />
            <br />
            <b>Create Your Own Music Now</b>
          </p>
          <Button p={2} variant="secondary" onClick={createMusicHandler}>
            create
          </Button>
        </HeaderStyle>
      </Wrapper>
      <Title>
        <div>Yours</div>
        <div></div>
        <div></div>
        <div>Music</div>
        <div>Artist</div>
        <div>Duration</div>
        <div>Others</div>
      </Title>
    </>
  );
};

export default Header;
