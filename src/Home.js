import React,{useEffect} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Set_Login_Status } from './redux/actions/Login_Status_Actions';
function Home() {

  const IsLogin = useSelector((state)=>state.Login.IsLogin)
  const dispatch = useDispatch();

  axios.defaults.withCredentials = true;


  const Logout = () => {
    axios.post("http://localhost:3001/logout").then((res)=>{
      if(res.data.LoggedIn == false){
				dispatch(Set_Login_Status(res.data.LoggedIn))}
		})
    .catch((err)=>{
      console.log(err)
    })
  }





  useEffect(() => {
    axios.get("http://localhost:3001/loginstatus").then((res)=>{
      if(res.data.LoggedIn){
				dispatch(Set_Login_Status(res.data.LoggedIn))}
		})
    .catch((err)=>{
      console.log(err)
    })
  },[]);



  

  if (!IsLogin){
    return(
     <Redirect to="login" />
    )
  }
  else{

  return (
    <React.Fragment>
        <div>
          <h1>Home Page</h1>
          <button onClick={Logout} >Logout</button>
        </div>
    </React.Fragment>
  );
}
}

export default Home;
