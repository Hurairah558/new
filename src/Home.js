import React from 'react';
import Header from './Student/Header/Header';
import { Table } from 'semantic-ui-react'

class ComponentToPrint extends React.Component {

  l = ["sdfasdfasdfsdfsfsdfs",2,3,5,6,2,3,5]

  render() {
    return (
      <React.Fragment>
        <Header/>
        <h1 className="d-flex justify-content-center" style={{marginTop:350}} >Home</h1>
      </React.Fragment>
    );
  }
}

export default ComponentToPrint;