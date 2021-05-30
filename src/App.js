import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login_Form/Login_Form';
import Admission_Form from './Student/Admission_Form/Admission_Form';
import Student_Addmissions from './Student/Admissions/Admissions';
import Students from './HOD/Students/Students';
import Merit_List from './Student/Merit_List/Merit_List';
import MeritListData from './HOD/MeritList_Controller/MeritList_Controller';
function App() {
  return (
    <React.Fragment>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/admissionform" component={Admission_Form}/>
          <Route exact path="/student/admissions" component={Student_Addmissions}/>
          <Route exact path="/hod/students" component={Students}/>
          <Route exact path="/student/meritlist" component={Merit_List}/>
          <Route exact path="/hod/meritlistcontroller" component={MeritListData}/>
      </Switch>
    </React.Fragment>
  );
}
export default App;