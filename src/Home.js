import React,{useEffect} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Set_Login_Status } from './redux/actions/Login_Status_Actions';
import SideMenu from './Fixed Components/SideMenu';
import Header from './Fixed Components/Header';
function Home() {

  // const IsLogin = useSelector((state)=>state.Login.IsLogin)
  // const dispatch = useDispatch();

  axios.defaults.withCredentials = true;

  const checklog = localStorage.getItem("HOD")

  useEffect(() => {
    axios.get("http://localhost:3001/loginstatus").then((res)=>{
      // if(res.data.LoggedIn){
			// 	dispatch(Set_Login_Status(res.data.LoggedIn))}
      console.log("Home",res.data.session)
		})
    .catch((err)=>{
      console.log(err)
    })
  },[]);

  if (!checklog){
    return(
     <Redirect to="login" />
    )
  }
  else{

  return (
    <React.Fragment>
      <Header/>
      <SideMenu/>
        <section>
          <h1>Home Page</h1>
        </section>
    </React.Fragment>
  );
}
}

export default Home;
