import Button from "../UI/Buttton";
import HeaderStyle from "../UI/HeaderStyle";
import Wrapper from "../UI/wrapper";
import Title from "../UI/Title";

const Header = (props) => {
  const createMusicHandler = () => {
    props.createMusicModal(true);
  };
  return (
    <>
      <Wrapper justifyContent={"center"}>
        <HeaderStyle>
          <h1>Free Music For You!</h1>
          <p>
            Whether you're a die-hard music fan or just looking to find some new
            tunes, our music list web app has something for everyone. So why
            wait? <br /><br /> Create and start building your ultimate music library!
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
        <div>Music</div>
        <div>Artist</div>
        <div>Duration</div>
        <div>Others</div>
      </Title>
    </>
  );
};

export default Header;
