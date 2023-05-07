import React from 'react';
import ReactLoading from 'react-loading';
 
const Loader = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={'7%'} width={'7%'} />
);
 
export default Loader;