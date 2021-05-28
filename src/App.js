import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login_Form/Login_Form';
import Admission_Form from './Student/Admission_Form/Admission_Form';
import Header from './Fixed Components/Header';
import Student_Addmissions from './Student/Admissions/Admissions';
import Admissions from './HOD/Admissions/Admissions';
import Merit_List from './Student/Merit_List/Merit_List';
import MeritListData from './HOD/MeritList_Controller/MeritList_Controller';
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/admissionform" component={Admission_Form}/>
          <Route exact path="/student/admissions" component={Student_Addmissions}/>
          <Route exact path="/hod/admissions" component={Admissions}/>
          <Route exact path="/hod/meritlist" component={Merit_List}/>
          <Route exact path="/hod/meritlistcontroller" component={MeritListData}/>
      </Switch>
    </React.Fragment>
  );
}
export default App;