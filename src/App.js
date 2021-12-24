import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import "./App.css";

const clientId = "153943644474-32m0j2fnoaihfcac9gmnfsubg78daeu7.apps.googleusercontent.com";

function App() 
{
  const p = document.getElementsByClassName("info-p")[0];

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
      document.getElementsByClassName("info-p")[0].innerHTML += `<br/><img src='https://lh3.googleusercontent.com/a-/AOh14GhB6BBGArlX_Pw2GPjBtZmCC5HJfWXAluTNVoaJ=s96-c'/>`;
        document.getElementsByClassName("info-p")[0].innerHTML += "<br/>First Name : "+res.profileObj.givenName;
        document.getElementsByClassName("info-p")[0].innerHTML += "<br/>Last Name : "+res.profileObj.familyName;
        document.getElementsByClassName("info-p")[0].innerHTML += "<br/>Email : "+res.profileObj.email;

       



        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
      document.getElementsByClassName("info-p")[0].innerHTML="";
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (<>

    <div class="box-form row">
    <div class="left col-6 p-3">
      <span>
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
        <div>
            <p className='info-p'></p>
            
            
        </div>
      </span>
    </div>


      <div class="right col-6 ">
      <br/>

      <h5>Login</h5>
      <br/><br/>
      <p>Don't have an account? <a href="#">Creat Your Account</a> it takes less than a minute</p>
      <div class="inputs">
        <input type="text" placeholder="user name"/>
        <br/>
        <input type="password" placeholder="password"/>
      </div>

        <br/><br/>

      <div class="remember-me--forget-password">
    <label>
      <input type="checkbox" name="item" checked/>
      <span class="text-checkbox">Remember me</span>
    </label>
        <p>forget password?</p>
      </div>

        <br/>
        <button>Login</button>
    </div>

    </div>

        
        </>
    );
}
export default App;
