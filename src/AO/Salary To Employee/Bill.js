import React from 'react';
import { useLocation } from 'react-router';
import Pdf from "react-to-pdf";
import { 
    MDBBtn  
  } from 'mdbreact';
const ref = React.createRef();

const PDF = () => {

    const Location = useLocation()

    return(
        <>
        <div className="Student" ref={ref}>
            <div className="container">
                <h1 className="text-white"><b>Govt. Murray College Sialkot</b></h1>
                <h1 className="text-white"><b>Govt. Murray College Sialkot</b></h1>
                <h1 className="text-white"><b>Govt. Murray College Sialkot</b></h1>
                <div className="row" style={{marginLeft:50}}>
                    <div className="col-md-6">
                        <table className="table table-hover table-bordered">
                            <tbody>
                                <tr>
                                    <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}><h1><b>Govt. Murray College Sialkot</b></h1></td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table table-hover table-bordered">
                            <tbody>
                                <tr>
                                    <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}} colspan="2"><h3><b>Employee's Salary</b></h3></td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}><b>Instructor's Name</b></td>
                                    <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}>{Location.state.Name}</td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}><b>Instructor's Designation</b></td>
                                    <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}>{Location.state.Designation}</td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}><b>Total Amount (PKR)</b></td>
                                    <td style={{fontWeight:'bold',fontSize:15,textAlign:'center',border:'1px solid'}}>{Location.state.Amount}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <Pdf targetRef={ref} filename="PayBill.pdf">
            {({toPdf})=> <MDBBtn style={{marginLeft:300}} gradient="blue"onClick={toPdf}><b>Generate Bill</b></MDBBtn> }
        </Pdf>
        
        </>
    );
}

export default PDF;