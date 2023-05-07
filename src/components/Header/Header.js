import "./Header.css";
import Button from "../UI/Buttton";

const Header = (props) => {
  const createMusicHandler = () => {
    props.createMusicModal(true);
  };
  return (
    <>
      <div className="wrapper">
        <div className="__content__wrapper">
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
        </div>
      </div>
      <div className="titles">
        <div className="titles-gap">#</div>
        <div>Music</div>
        <div>Artist</div>
        <div>Duration</div>
        <div>Others</div>
      </div>
    </>
  );
};

export default Header;
