import React from 'react';
import Header from '../Header/Header';
class ComponentToPrint extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <h1 className="d-flex justify-content-center" style={{marginTop:350}} >Instructor's Home Page</h1>
      </React.Fragment>
    );
  }
}

export default ComponentToPrint;