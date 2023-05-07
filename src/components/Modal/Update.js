import { useState } from "react";
import { useDispatch } from 'react-redux'
import Button from "../UI/Buttton";
import CreateMusic from "./CreateMusic";
import { removeItemSuccess } from "../../features/Data/DataSlice"
import { MdDelete,MdEdit } from "react-icons/md";
import DeleteConfirm from "./DeleteConfirm";
const Update = (props) => {
  const [updateId,setUpdateId] = useState('check');
  const dispatch = useDispatch()

  const [isEditBtnClicked, setISEditBtnClicked] = useState(false);
  const [check,setCheck] = useState(false);
  let deleteDisplay = "";
  const deleteEventHandler = () => {
    deleteDisplay= "Deleted";
    setCheck(true);
    dispatch(removeItemSuccess(props.list.id));
    console.log(deleteDisplay)
  };
  const editEventHandler = () => {
    setUpdateId(props.list);
    setISEditBtnClicked(true);
    setCheck(false);
  };

  const backToHomeHandler = () => {
    setCheck(true);
  };

  return (
    <>
      {!deleteDisplay === "Deleted" && <DeleteConfirm message="Deleted "/>}
      {!check && isEditBtnClicked &&  (
        <CreateMusic
          ToHomeHandler={backToHomeHandler}
          list={updateId}
          create="update"
          Create_Music="Edit Music"
        />
      )}
      <div>
        <Button
          title="edit"
          px={[1, 3]}
          mx={1}
          color="rgb(34, 46, 73);"
          variant="tertiary"
          onClick={editEventHandler}
        >
          <MdEdit/>
        </Button>
        <Button
          title="delete"
          px={[1, 2]}
          color="rgb(34, 46, 73);"
          variant="primary"
          onClick={deleteEventHandler}
        >
          <MdDelete/>
        </Button>
      </div>
    </>
  );
};
export default Update;
