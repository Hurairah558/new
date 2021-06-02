import React, { useState,useEffect } from 'react';
import Header from './Student/Header/Header';
class Home extends React.Component{
render(){

  return (
    <React.Fragment>
      <Header/>
          <h1 className="mb-4 d-flex justify-content-center fixed-bottom" >Home Page</h1>
    </React.Fragment>
  );
}
}


export default Home;
