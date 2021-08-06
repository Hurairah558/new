import React, { useRef } from 'react';
import './Voucher_Design.css';
import Vouchers from './Voucher.JPG';
// import Header from '../Header/Header';
import ReactToPrint from 'react-to-print';
// import { ComponentToPrint } from './ComponentToPrint';
import { useReactToPrint } from 'react-to-print';
import Pdf from "react-to-pdf";
import ReactDOMServer from "react-dom/server";
import { Button, Header, Modal , Table } from 'semantic-ui-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { render } from '@testing-library/react';
import { renderToString } from "react-dom/server";
import Printer, { print } from 'react-pdf-print';
import Voucherss from './Vouchers';
import { useLocation } from 'react-router';
import { 
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBView,
  MDBBtn,
  MDBSpinner 

} from 'mdbreact';
// import React from 'react';
// import Pdf from "react-to-pdf";

// const ref = React.createRef();
// const options = {
//   orientation: 'landscape'
// };
// const PDF = (props) => {
//   return (
//     <>
//       <div className="Post" style={{width: '100%', height: '100%'}} ref={ref}>
//         <h1>Hirahra</h1>
//         {/* <img src={props.image} alt={props.title} /> */}
//         <p>Malik</p>
//         <Voucherss/>
//       </div>
//       <Pdf targetRef={ref} options={options} filename="post.pdf">
//         {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
//       </Pdf>
//     </>
//   );
// }

// export default PDF;

const ref = React.createRef();

function PDF () {

  const location = useLocation()

      return (
          <React.Fragment>
                  {/* <tbody>
                      <tr>
                          <td>data 1</td>
                          <td>data 2</td>
                          <td>data 3</td>
                      </tr>
                  </tbody>
                  <tbody>
                      <tr>
                          <td className="second">data 4</td>
                          <td className="second">data 5</td>
                          <td className="second">data 6</td>
                      </tr>
                  </tbody> */}
                  {location.state.data.map((student,index)=>{
                    return(
                      <React.Fragment>
                        <div><Voucherss
                        Roll={student.Roll}
                        Name={student.Full_Name}
                        Father_Name={student.Father_Name}
                        Semester={student.Semester}
                        Shift={student.Shift}
                        Department={student.Department}
                        Year={student.Year}
                        Fall_Spring={location.state.extra.Fall_Spring}
                        Total={location.state.extra.Total}
                        Col={location.state.extra.Col}
                        Uni={location.state.extra.Uni}
                        Words={location.state.extra.Words}
                        /></div>
                        <div style={{marginTop:300}}></div>
                      </React.Fragment>
                    )
                  })}
                  

        </React.Fragment>
      );
  }

//   const Example = () => {
//     const componentRef = useRef();
  
//     return (
//       <div>
//         <ReactToPrint
//           trigger={() => 
//             <button style={{marginTop:100}} >Print this out!</button>
//         }
//           content={() => componentRef.current}
//         />
//         <PDF ref={componentRef} />
//       </div>
//     );
//   };

export default PDF;