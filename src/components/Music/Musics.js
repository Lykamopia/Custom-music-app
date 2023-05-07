import { useEffect } from "react";
import MusicList from "./MusicList";
import "./MusicList.css";
import { useSelector, useDispatch } from "react-redux";
import { getMusicFetch } from "../../features/Data/DataSlice";
import Loader from "../../assets/Loader/Loader";

const Musics = () => {
  const fetchedMusic = useSelector((state) => state.items.items);
  const Loading = useSelector((state) => state.items.isLoading);
  const dispatchFetch = useDispatch();

  useEffect(() => {
    setTimeout(()=>dispatchFetch(getMusicFetch()),100)
  }, [dispatchFetch]);

  const List = fetchedMusic.map((m) => {
    return (
      <li key={m.id}>
        <MusicList
          artistName={m.artistName}
          musicName={m.musicName}
          duration={m.duration}
          list={m}
        />
      </li>
    );
  });

  return (
    <div className="__verically_scrollable">
      <div>
        {!Loading ? (
          <ul>{List}</ul>
        ) : (
          <div className="loader">
            <div className="__fill__loader">
              <Loader type="spin" color="#343434"/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Musics;
