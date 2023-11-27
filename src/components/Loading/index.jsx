import * as React from 'react';
import Loader from "react-loader-spinner";

const style={
  width:"100%",
  top:0,
  left:0,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  position:"absolute"
}


export default function LoadingPage () {
  return (
    <div style={style}>
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100"/>
    </div>
  );
}
