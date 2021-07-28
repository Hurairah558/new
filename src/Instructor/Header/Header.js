import React,{useState,useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import {
    MDBNavbar,MDBBtn, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";

const Header = () => {

    axios.defaults.withCredentials = true;

    const [login,setlogin] = useState(localStorage.getItem("HOD"))

    // login==null?
    //     return(
    //     <Redirect to="/login" />):
    //     <div></div>
    
    const [isOpen, setisOpen] = useState(false)
      
    const toggleCollapse = () => {
        setisOpen(!isOpen);
      }
    

    useEffect(() => {
        axios.get("http://localhost:3001/loginstatus").then((res)=>{
        if(res.data.LoggedIn==false){
            localStorage.removeItem("HOD")
            setlogin(localStorage.getItem("HOD"))
        }
            })
        .catch((err)=>{
        console.log(err)
        })
    },[login]);


    const Logout = () => {
        localStorage.removeItem("HOD")
        setlogin(localStorage.getItem("HOD"))
        axios.post("http://localhost:3001/logout").then((res)=>{
            })
        .catch((err)=>{
          console.log(err)
        })
      }

      if(login==null){
        return (
            <React.Fragment>
                <Redirect to="/login" />
            </React.Fragment>
        )
    }

    if(login==null){
        return <Redirect to="/login"/>;
    }
    else{
            if (JSON.stringify(login).includes("AO")){
                return(
                    <Redirect to="/ao/dashboard" />
                )
            }
        
            if (JSON.stringify(login).includes("RO")){
                return(
                    <Redirect to="/ro/dashboard" />
                   )
            }
        
            if (JSON.stringify(login).includes("SSIO")){
                return(
                    <Redirect to="/ssio/dashboard" />
                   )
            }
        
            if (JSON.stringify(login).includes("Student")){
                return(
                    <Redirect to="/student/profile" />
                   )
            }
            if (JSON.stringify(login).includes("HOD")){
                return(
                 <Redirect to="/hod/dashboard" />
                )
              }
    }


    return (
        
        <React.Fragment>
            {login==null?
          <Redirect to="/login" />:
          <div></div>
      }
            <MDBNavbar style={{marginBottom:-60}} className="sticky-top" color="blue" dark expand="md">
            <MDBNavbarBrand>
            <MDBNavLink to="/instructor/home"><strong className="white-text"><span className="lab la-accusoft text-white"></span> <span className="text-white">GMC Sialkot</span></strong></MDBNavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <MDBNavLink to="/instructor/awardlist"><b>Upload Award List</b></MDBNavLink>
                    </MDBNavItem>
                        <MDBNavItem>
                    <MDBNavLink to="/instructor/attendance"><b>Upload Attendance</b></MDBNavLink>
                        </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/instructor/password/reset"><b>Change Password</b></MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                <MDBNavItem>
                { login!=null?
                  <MDBBtn gradient="peach"  onClick={Logout}><b>Logout</b></MDBBtn>
                        :
                        <div></div>
                    }
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
            {/* {login==null?
          <Redirect to="/login" />:
          <div></div>
      }
            <nav id="header" className="position-fixed sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
                <h2>
                <Link to="/instructor/home"><span className="lab la-accusoft text-white mt-2"></span> <span className="text-white">GMC Sialkot</span></Link>
                </h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text-white navbar-toggler-icon"></span>
                </button>

                <div className="ml-4 collapse navbar-collapse mb-2" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/instructor/awardlist" className="nav-link text-white" href="#">Award List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/instructor/attendance" className="nav-link text-white" href="#">Attendance</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/password/reset" className="nav-link text-white" href="#">Change</Link>
                        </li>
                        { login!=null?
                        <button className="btn btn-primary ml-2" onClick={Logout}>Logout</button>
                        :
                        <div></div>
                    }
                    </ul>
                </div>
            </nav> */}
        </React.Fragment>
    )
}

export default Header;
// import React, { Component } from "react";

    
//     class NavbarPage extends Component {
    
//     render() {
//       return (
//           <MDBNavbar style={{marginBottom:-60}} className="sticky-top" color="blue" dark expand="md">
//             <MDBNavbarBrand>
//             <MDBNavLink to="/instructor/home"><strong className="white-text"><span className="lab la-accusoft text-white"></span> <span className="text-white">GMC Sialkot</span></strong></MDBNavLink>
//             </MDBNavbarBrand>
//             <MDBNavbarToggler />
//             <MDBCollapse id="navbarCollapse3" navbar>
//               <MDBNavbarNav left>
//                 <MDBNavItem>
//                   <MDBNavLink to="/instructor/awardlist"><b>Upload Award List</b></MDBNavLink>
//                 </MDBNavItem>
//                 <MDBNavItem>
//                   <MDBNavLink to="/instructor/attendance"><b>Upload Attendance</b></MDBNavLink>
//                 </MDBNavItem>
//                 <MDBNavItem>
//                   <MDBNavLink to="/instructor/password/reset"><b>Change Password</b></MDBNavLink>
//                 </MDBNavItem>
//               </MDBNavbarNav>
//             </MDBCollapse>
//           </MDBNavbar>
//         );
//       }
//     }
    
//     export default NavbarPage;