import React from 'react';
import Header from './Student/Header/Header';

function Home() {

    return (
      <React.Fragment>
        <Header/>
        <h1 className="d-flex justify-content-center" style={{marginTop:350}} >Home</h1>
      </React.Fragment>
    );
}

export default Home;