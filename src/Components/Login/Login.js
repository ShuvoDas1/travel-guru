import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const Login = () => {
    if(firebase.app.length == 0){
        firebase.initializeApp(firebaseConfig);
    }
    const signInWithGoogle = () => {
        const  provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <>
        <form>
            <h3>Login</h3>
            <br/>
            <input type="text"  className='form-control' placeholder='Username or Email' />
            <br/>
            <input type="password" className='form-control' name="" id="" placeholder='Enter password'/>
            <br/>
            <input type="checkbox" name="Remember Me" id=""/>
            <label htmlFor="rememberMe"> Remember Me</label>
            <br/>
            <button className='btn btn-success'>Login</button>
        </form>
        <br/>
        <button onClick={signInWithGoogle}>Contineu With Google</button>
        </>
    
    );
};

export default Login;