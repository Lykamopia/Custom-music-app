import {useState,useEffect} from 'react'
const DeleteConfirm = (props) => {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000); 
  
      return () => clearTimeout(timer);
    }, []);
    return (
        showMessage ?
        (<div>
            <div className="__input__display" style={{top:'65%',textAlign:'center'}}>
            <h3 style={{color: 'green'}}>| {props.message} successfully!</h3>
            </div>
        </div>) :null
    )
}

export default DeleteConfirm