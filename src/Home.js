import Header from './Student/Header/Header';
import {Link ,Redirect} from 'react-router-dom';

import React, { Fragment } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBView
} from 'mdbreact';

const ButtonPage = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="Student">
        <section style={{marginLeft:-70,marginRight:20}} className='mb-5'>
        <MDBCard cascade narrow>
          <MDBRow>
            <MDBCol md='12'>
              <MDBView
                cascade
                className='gradient-card-header light-blue lighten-1'
              >
                <h4 className='h4-responsive mb-0 font-weight-bold'>Govt. Murray College Sialkot</h4>
              </MDBView>
              <MDBCardBody style={{marginLeft:100}}>
          <MDBRow>
            <MDBCol size="4">
            <MDBBtn style={{padding:100,cursor:'auto'}} tag="a" size="lg" floating gradient="peach">
                <Link to="/login" className="nav-link text-white" href="#"><b style={{position:'absolute',marginLeft:-40,marginTop:-20,fontSize:20}}>Login</b></Link>
            </MDBBtn>
            </MDBCol>
            <MDBCol size="4">
              
                <MDBBtn style={{padding:100,cursor:'auto'}} tag="a" size="lg" floating gradient="purple">
                    <Link to="/admissionform" className="nav-link text-white" href="#"><b style={{position:'absolute',marginLeft:-95,marginTop:-20,fontSize:20}}>Admission Form</b></Link>
                </MDBBtn>
              
            </MDBCol>
            <MDBCol size="4">
              
                <MDBBtn style={{padding:100,cursor:'auto'}} tag="a" size="lg" floating gradient="blue">
                    <Link to="/student/announcements" className="nav-link text-white" href="#"><b style={{position:'absolute',marginLeft:-95,marginTop:-20,fontSize:20}}>Announcements</b></Link>
                </MDBBtn>
              
            </MDBCol>
            <MDBCol size="4">
              
                <MDBBtn style={{padding:100,cursor:'auto'}} tag="a" size="lg" floating gradient="peach">
                    <Link to="/student/timetable" className="nav-link text-white" href="#"><b style={{position:'absolute',marginLeft:-60,marginTop:-20,fontSize:20}}>Time Table</b></Link>
                </MDBBtn>
              
            </MDBCol>
            <MDBCol size="4">
              
                <MDBBtn style={{padding:100,cursor:'auto'}} tag="a" size="lg" floating gradient="purple">
                    <Link to="/student/datesheet" className="nav-link text-white" href="#"><b style={{position:'absolute',marginLeft:-110,marginTop:-40,fontSize:20}}>Datesheet Morning</b></Link>
                </MDBBtn>
              
            </MDBCol>
            <MDBCol size="4">
              
                <MDBBtn style={{padding:100,cursor:'auto'}} tag="a" size="lg" floating gradient="purple">
                    <Link to="/student/datesheet2" className="nav-link text-white" href="#"><b style={{position:'absolute',marginLeft:-110,marginTop:-40,fontSize:20}}>Datesheet Evening</b></Link>
                </MDBBtn>
              
            </MDBCol>
            <MDBCol size="4">
              
                <MDBBtn style={{padding:100,cursor:'auto'}} tag="a" size="lg" floating gradient="blue">
                    <Link to="/student/meritlist" className="nav-link text-white" href="#"><b style={{position:'absolute',marginLeft:-110,marginTop:-40,fontSize:20}}>MeritList Morning</b></Link>
                </MDBBtn>
              
            </MDBCol>
            <MDBCol size="4">
              
                <MDBBtn style={{padding:100,cursor:'auto'}} tag="a" size="lg" floating gradient="blue">
                    <Link to="/student/meritlist2" className="nav-link text-white" href="#"><b style={{position:'absolute',marginRight:10,marginLeft:-110,marginTop:-40,fontSize:20}}>MeritList Evening</b></Link>
                </MDBBtn>
              
            </MDBCol>
          </MDBRow>
          </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </section>
      </div>
    </React.Fragment>
  );
}

export default ButtonPage;
