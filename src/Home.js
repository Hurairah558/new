import React, {useRef, useState,useEffect } from 'react';
import Header from './Student/Header/Header';
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import Vouchers from './RO/Voucher/Voucher.JPG'

class ComponentToPrint extends React.Component {

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