import React from 'react';
import './Login_Form_Design.css';

function Login() {
  return (
    <React.Fragment>
		<div className="Login_Form">
			<input type="checkbox" id="chk" aria-hidden="true"/>
			<div className="signup">
				<form>
					<label for="chk" className="Login_Label" aria-hidden="true">Login</label>
					<input className="Login_input" type="text" name="text" placeholder="User name" required=""/>
					<input className="Login_input" type="email" name="email" placeholder="Email" required=""/>
					<input className="Login_input" type="Password" name="pswd" placeholder="Password" required=""/>
					<button className="Login_Button">Login</button>
					<p className="Login_p" >Forget Password ?</p>
				</form>
			</div>
		</div>
    </React.Fragment>
  );
}
export default Login;
