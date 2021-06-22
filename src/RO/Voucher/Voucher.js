import React, { useRef } from 'react';
import './Voucher_Design.css';
import Vouchers from './Voucher.JPG';
import Header from '../Header/Header';
import ReactToPrint from 'react-to-print';
// import { ComponentToPrint } from './ComponentToPrint';
import { useReactToPrint } from 'react-to-print';
import Pdf from "react-to-pdf";
import ReactDOMServer from "react-dom/server";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { render } from '@testing-library/react';
import { renderToString } from "react-dom/server";
import Printer, { print } from 'react-pdf-print';


class ComponentToPrint extends React.PureComponent {
    render() {
      return (
          <React.Fragment>
            <table>
                <tbody>
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
                </tbody>
            </table>
        </React.Fragment>
      );
    }
  }

  const Example = () => {
    const componentRef = useRef();
  
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <ComponentToPrint ref={componentRef} />
      </div>
    );
  };

export default Example;

