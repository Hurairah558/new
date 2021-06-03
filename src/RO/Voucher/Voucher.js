import React, { useRef } from 'react';
import './Voucher_Design.css';
import Vouchers from './Voucher.JPG';
import Header from '../Header/Header';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import Pdf from "react-to-pdf";
import ReactDOMServer from "react-dom/server";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { render } from '@testing-library/react';
import { renderToString } from "react-dom/server";
import Printer, { print } from 'react-pdf-print';


const Voucher =()=> {

    var list = [1,2,3,4,5]
    return (
        <React.Fragment>
            {list.map((record,index)=>{
        return(
            <div id="pdf">
                <h1 className="d-flex justify-content-center">{index+1}</h1>
                <div className="row" >
                    <div className="col-md-3" id="copy" >
                        <p className="copy_name">1-Bank Copy</p>
                        <p className="date">3-June-21</p>
                        <p className="shift">Morning</p>
                        <p className="Name">Abu Hurairah</p>
                        <p className="Father" >Malik</p>
                        <p className="Roll" >17651556-18</p>
                        <p className="Department" >Information Technology</p>
                        <p className="Semester" >8</p>
                        <p className="Session" >2017-21</p>
                        <p className="amount1" >4500/-</p>
                        <p className="amount2" >4200/-</p>
                        <p className="amount3" >300/-</p>
                        <p className="amount4" >4500/-</p>
                        <p className="amount_words" >Fourty Five Hundred</p>
                        <div className="Voucher">
                            <img src={Vouchers} />
                        </div>
                    </div>
                    <div className="col-md-3" id="copy" >
                        <p className="copy_name">2-Office Copy</p>
                        <p className="date">3-June-21</p>
                        <p className="shift">Morning</p>
                        <p className="Name">Abu Hurairah</p>
                        <p className="Father" >Malik</p>
                        <p className="Roll" >17651556-18</p>
                        <p className="Department" >Information Technology</p>
                        <p className="Semester" >8</p>
                        <p className="Session" >2017-21</p>
                        <p className="amount1" >4500/-</p>
                        <p className="amount2" >4200/-</p>
                        <p className="amount3" >300/-</p>
                        <p className="amount4" >4500/-</p>
                        <p className="amount_words" >Fourty Five Hundred</p>
                        <div className="Voucher">
                            <img src={Vouchers} />
                        </div>
                    </div>
                    <div className="col-md-3" id="copy" >
                        <p className="copy_name">3-Deptt Copy</p>
                        <p className="date">3-June-21</p>
                        <p className="shift">Morning</p>
                        <p className="Name">Abu Hurairah</p>
                        <p className="Father" >Malik</p>
                        <p className="Roll" >17651556-18</p>
                        <p className="Department" >Information Technology</p>
                        <p className="Semester" >8</p>
                        <p className="Session" >2017-21</p>
                        <p className="amount1" >4500/-</p>
                        <p className="amount2" >4200/-</p>
                        <p className="amount3" >300/-</p>
                        <p className="amount4" >4500/-</p>
                        <p className="amount_words" >Fourty Five Hundred</p>
                        <div className="Voucher">
                            <img src={Vouchers} />
                        </div>
                    </div>
                    <div className="col-md-3" id="copy" >
                        <p className="copy_name">4-Student Copy</p>
                        <p className="date">3-June-21</p>
                        <p className="shift">Morning</p>
                        <p className="Name">Abu Hurairah</p>
                        <p className="Father" >Malik</p>
                        <p className="Roll" >17651556-18</p>
                        <p className="Department" >Information Technology</p>
                        <p className="Semester" >8</p>
                        <p className="Session" >2017-21</p>
                        <p className="amount1" >4500/-</p>
                        <p className="amount2" >4200/-</p>
                        <p className="amount3" >300/-</p>
                        <p className="amount4" >4500/-</p>
                        <p className="amount_words" >Fourty Five Hundred</p>
                        <div className="Voucher">
                            <img src={Vouchers} />
                        </div>
                    </div>
                </div>
            </div>
        );
    })}
        </React.Fragment>
    );
    
}
 


export default Voucher;
  



