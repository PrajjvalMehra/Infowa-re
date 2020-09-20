import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
    const [email,setEmail]=useState();
    const history = useHistory();
    function handleClick(){
        history.push("/SignUp");
    }
     function handleSignIn(e){
        setEmail(e.target.value);
     }
    function checkLogin(){
        if(email=="admin@admin.com")
        {
            sessionStorage.setItem('check',"abcdef");
            history.push("/Admin");
        }
        else
        {
            var res=email.split("@");
            var verifycity=res[0];
            sessionStorage.setItem('check',verifycity);
            history.push("/Admin");
        }
        
    }
    
        return (
            <div>
                <form>
                    <h3>Admin Panel</h3>

                    <div className="form-group">
                        <label>Sign in</label>
                        <input type="email" className="form-control" onChange={handleSignIn} placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={checkLogin}> Login</button>
                    <button type="submit" className="btn btn-primary btn-block" onClick={handleClick}>Sign Up</button>
                    
                    <p className="forgot-password text-right">
                        
                    </p>
                </form>
            </div>
        );
    
}