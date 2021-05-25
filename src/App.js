import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login_Form/Login_Form';
import Admission_Form from './Student/Admission_Form/Admission_Form';
import SideMenu from './Fixed Components/SideMenu';
import Header from './Fixed Components/Header';
import Student_Addmissions from './Student/Admissions/Admissions';
function App() {
  return (
    <React.Fragment>
      <Header/>
      {/* <SideMenu/> */}
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/admissionform" component={Admission_Form}/>
          <Route exact path="/student/admissions" component={Student_Addmissions}/>
      </Switch>
    </React.Fragment>
  );
}
export default App;