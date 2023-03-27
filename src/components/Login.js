import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";
import { auth } from "../firebase";
import { FirebaseError } from 'firebase/app';


const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2> Welcome to Chattybox!</h2>

                <div
                className="login-button google"
                onClick={() => auth.signInWithRedirect(new FirebaseError.auth.GoogleAuthProvider())}
                > 
                <GoogleOutlined /> Sign In with Google

                </div>

                <br /> <br />

                <div
                className="login-button facebook"
                onClick={() => auth.signInWithRedirect(new FirebaseError.auth.FacebookAuthProvider())}
                > 
                <FacebookOutlined /> Sign In with facebook

                </div>
            </div>
        </div>
    );
}

export default Login;