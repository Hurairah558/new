import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login_Form/Login_Form';
import Admission_Form from './Student/Admission_Form/Admission_Form';
import Student_Addmissions from './Student/Admissions/Admissions';
import Students from './HOD/Students/Students';
import Merit_List from './Student/Merit_List/Merit_List';
import Merit_List2 from './Student/Merit_List/Merit_List2';
import MeritList_Controller from './HOD/MeritList_Controller/MeritList_Controller';
import MeritList_Controller2 from './HOD/MeritList_Controller/MeritList_Controller2';
import AddInstructor from './HOD/AddInstructor/AddInstructor';
import TimeTable_Generate from './HOD/TimeTable_Generate/TimeTable_Generate';
import Datesheet from './HOD/Datesheet/Datesheet';
import Datesheet2 from './HOD/Datesheet/Datesheet2';
import HOD_AwardLists from './HOD/AwardLists/AwardLists';
import HOD_AwardlistDetails from './HOD/AwardLists/Details';
import AddCourses from './HOD/AddCourses/AddCourses';
import AssignCourses from './HOD/AssignCourses/AssignCourses';
import AssignCourse from './HOD/Students/AssignCourse';
import DatesheetStudent from './Student/Datesheet/Datesheet';
import DatesheetStudent2 from './Student/Datesheet/Datesheet2';
import Time_Table from './Student/Time Table/Time_Table';
import Students_SSIO from './SSIO/Students/Students';
import Students_SSIO2 from './SSIO/Students/Students2';
import Awardlists from './SSIO/AwardLists/AwardLists';
import AwardlistDetails from './SSIO/AwardLists/Details';
import Students_RO from './RO/Students/Students';
import Students_RO2 from './RO/Students/Students2';
import Admission_Controller from './RO/Admission_Controller/Admission_Controller';
import Voucher from './RO/Voucher/Voucher';
import Free_Instructors from './SSIO/Free_Instructors/Free_Instructors';
import Announcement from './SSIO/Announcement/Announcement';
import Announcements from './Student/Announcements/Announcements';
import AddStudent from './HOD/AddStudent/AddStudent';
import EditStudent from './HOD/Students/Edit_Student';
import HOD_Admissions from './HOD/Admissions/Admissions';
import Awardlist from './Instructor/Award list/Award list';
import AwardlistHOD from './HOD/Award list/Award list';
import InstructorHome from './Instructor/Home/Home';
import AO_Fee_Management from './AO/Fee Management/Fee Management';
import AO_Fee_Management2 from './AO/Fee Management/Fee Management2';
import AO_Fee_Record from './AO/Fee_Record/Fee_Record';
import ChangePasswordAO from './AO/ResetPassword/ResetPassword';
import ChangePasswordHOD from './HOD/ResetPassword/ResetPassword';
import ChangePasswordRO from './RO/ResetPassword/ResetPassword';
import ChangePasswordSSIO from './SSIO/ResetPassword/ResetPassword';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import Attendance_Instructor from './Instructor/AttendanceUpload/AttendanceUpload';
import Attendance_HOD from './HOD/AttendanceUpload/AttendanceUpload';
import Attendance_List_HOD from './HOD/AttendanceList/AttendanceList';
import Attendance_Details_HOD from './HOD/AttendanceList/Details';
import Attendance_List_SSIO from './SSIO/AttendanceList/AttendanceList';
import Attendance_Details_SSIO from './SSIO/AttendanceList/Details';
import Login_Student from './Student/Login/Login';
import Profile from './Student/Profile/Profile';
function App() {
  return (
    <React.Fragment>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/admin" component={Login}/>
          <Route exact path="/login" component={Login_Student}/>
          <Route exact path="/student/profile" component={Profile}/>
          <Route exact path="/admissionform" component={Admission_Form}/>
          <Route exact path="/student/admissions" component={Student_Addmissions}/>
          <Route exact path="/hod/students" component={Students}/>
          <Route exact path="/student/meritlist" component={Merit_List}/>
          <Route exact path="/student/meritlist2" component={Merit_List2}/>
          <Route exact path="/hod/meritlistcontroller" component={MeritList_Controller}/>
          <Route exact path="/hod/meritlistcontroller2" component={MeritList_Controller2}/>
          <Route exact path="/hod/addinstructor" component={AddInstructor}/>
          <Route exact path="/hod/timetablegenerate" component={TimeTable_Generate}/>
          <Route exact path="/hod/datesheet" component={Datesheet}/>
          <Route exact path="/hod/datesheet2" component={Datesheet2}/>
          <Route exact path="/hod/awardlists" component={HOD_AwardLists}/>
          <Route exact path="/hod/awardlistdetails" component={HOD_AwardlistDetails}/>
          <Route exact path="/hod/addcourses" component={AddCourses}/>
          <Route exact path="/hod/assigncourses" component={AssignCourses}/>
          <Route exact path="/hod/assigncourse" component={AssignCourse}/>
          <Route exact path="/student/datesheet" component={DatesheetStudent}/>
          <Route exact path="/student/datesheet2" component={DatesheetStudent2}/>
          <Route exact path="/student/timetable" component={Time_Table}/>
          <Route exact path="/ssio/students" component={Students_SSIO}/>
          <Route exact path="/ssio/students2" component={Students_SSIO2}/>
          <Route exact path="/ssio/awardlists" component={Awardlists}/>
          <Route exact path="/ssio/awardlistdetails" component={AwardlistDetails}/>
          <Route exact path="/ro/students" component={Students_RO}/>
          <Route exact path="/ro/students2" component={Students_RO2}/>
          <Route exact path="/ro/admission_controller" component={Admission_Controller}/>
          <Route exact path="/ro/voucher" component={Voucher}/>
          <Route exact path="/ssio/freeinstructors" component={Free_Instructors}/>
          <Route exact path="/ssio/announcement" component={Announcement}/>
          <Route exact path="/student/announcements" component={Announcements}/>
          <Route exact path="/hod/addstudent" component={AddStudent}/>
          <Route exact path="/hod/editstudent" component={EditStudent}/>
          <Route exact path="/hod/admissions" component={HOD_Admissions}/>
          <Route exact path="/instructor/awardlist" component={Awardlist}/>
          <Route exact path="/hod/awardlist" component={AwardlistHOD}/>
          <Route exact path="/instructor/home" component={InstructorHome}/>
          <Route exact path="/ao/feemanagement" component={AO_Fee_Management}/>
          <Route exact path="/ao/feemanagement2" component={AO_Fee_Management2}/>
          <Route exact path="/ao/feerecord" component={AO_Fee_Record}/>
          <Route exact path="/ao/password/reset" component={ChangePasswordAO}/>
          <Route exact path="/hod/password/reset" component={ChangePasswordHOD}/>
          <Route exact path="/ro/password/reset" component={ChangePasswordRO}/>
          <Route exact path="/ssio/password/reset" component={ChangePasswordSSIO}/>
          <Route exact path="/forget/password" component={ForgetPassword}/>
          <Route exact path="/instructor/attendance" component={Attendance_Instructor}/>
          <Route exact path="/hod/attendance" component={Attendance_HOD}/>
          <Route exact path="/hod/attendancelist" component={Attendance_List_HOD}/>
          <Route exact path="/hod/attendancedetails" component={Attendance_Details_HOD}/>
          <Route exact path="/ssio/attendancelist" component={Attendance_List_SSIO}/>
          <Route exact path="/ssio/attendancedetails" component={Attendance_Details_SSIO}/>
      </Switch>
    </React.Fragment>
  );
}
export default App;