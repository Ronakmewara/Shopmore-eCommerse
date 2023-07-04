import React from 'react'
import { useState } from 'react';

export const Login = ({isLoggedIn , setisLoggedIn, setuserData}) => {
    
     

    const [username, setusername] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');

    

    
  return (
    <div className='body'>
    <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form   >
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" value={username} onChange={ (e) => setusername( e.target.value) } placeholder="User name" required="" />
					<input type="email" name="email" value={email} onChange={ (e) => setemail( e.target.value) } placeholder="Email" required=""/>
					<input type="password" name="password" value={password} onChange={ (e) => setpassword( e.target.value) } placeholder="Password" required=""/>
					<button type='submit'>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form  >
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email"  value = {email} onChange={ (e) => setemail(e.target.value)} name="email" placeholder="Email" required=""/>
					<input type="password" value={password} onChange={ (e) => setpassword(e.target.value)} name="password" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>
    </div>
  )
}
export default Login;