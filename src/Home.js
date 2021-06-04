import React, {useRef, useState,useEffect } from 'react';
import Header from './Student/Header/Header';
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import Vouchers from './RO/Voucher/Voucher.JPG'

class ComponentToPrint extends React.Component {

  render() {
    return (
      <div>
        <div className="row" id="pdf" >
            <div className="col-md-12" id="copy" >
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
            <div className="space" ></div>
        </div>
      </div>
    );
  }
}

// const Example = () => {
//   const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   const list=[1,2,3]

//   return (
//     <>
//       {list.map((record)=>{
//         return(
//           <div>
//             <ComponentToPrint ref={componentRef} />
//             <button onClick={handlePrint}>Print this out!</button>
//         </div>
//         );
//       })}
//       </>
//   );
// };

export default ComponentToPrint;