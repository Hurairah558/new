import React from 'react';
import './Login_Form_Design.css';

function Login() {
  return (
    <React.Fragment>
		<div className="main">
			<input type="checkbox" id="chk" aria-hidden="true"/>
			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="text" name="text" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<inpur type="Password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
					<p>Forget Password ?</p>
				</form>
			</div>
		</div>
    </React.Fragment>
  );
}
export default Login;
