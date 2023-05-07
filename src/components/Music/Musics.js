import { useEffect } from "react";
import MusicList from "./MusicList";
import LoaderStyle from "../UI/LoaderStyle";
import ListStyle from "../UI/List";
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
    <div >
      <div>
        {!Loading ? (
          <ListStyle>{List}</ListStyle>
        ) : (
            <LoaderStyle width={'70%'} ml={'15%'} mt={'5%'} >
              <Loader type="spin" color="#0c395c"/>
            </LoaderStyle>
        )}
      </div>
    </div>
  );
};

export default Musics;
