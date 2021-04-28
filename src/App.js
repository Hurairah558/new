import React from 'react';
import Login from './Login_Form/Login_Form';
import Home from './Home';
import {Route,Switch} from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/admin" component={Login}/>
      </Switch>
    </React.Fragment>
  );
}
export default App;