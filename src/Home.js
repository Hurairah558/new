import React, { useState,useEffect } from 'react';
import Header from './Student/Header/Header';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class Home extends React.Component{

  

    render() {

      function printt(){

      html2canvas(document.getElementById('root')).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF("landscape");
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("download.pdf");  
      });
      }
      return (
        <React.Fragment>
        {/* <Header/> */}
        <div className='App'>
          <h1>Hurairah</h1>
        </div>
        <button onClick={printt} > Click </button>
        </React.Fragment>
      )
    }
  }
export default Home;
