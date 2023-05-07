import { useState } from "react";
import Header from "./components/Header/Header";
import Musics from "./components/Music/Musics";
import CreateMusic from "./components/Modal/CreateMusic";
// import DeleteConfirm from "./components/Modal/DeleteConfirm";

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const createMusicModal = (props) => {
    if (props === true) setDisplayModal(true);
  };
  const backToHomeHandler = (props) => {
    if (props === true) setDisplayModal(false);
  };
  return (
    <div>
      <Header createMusicModal={createMusicModal}></Header>
      <Musics
        ToHomeHandler={backToHomeHandler}
      ></Musics>
      {displayModal && (
        <CreateMusic
          ToHomeHandler={backToHomeHandler}
          Create_Music="Create Music"
          create="create"
        />
      )}
    </div>
  );
}

export default App;
