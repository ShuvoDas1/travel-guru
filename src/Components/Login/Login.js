import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config.js';
import { UserContext } from '../../App.js';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/roombooking" } };

    const  googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    
    const signInWithGoogle = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const  {displayName,email,photoURL} = result.user;
            console.log(result.user);
            const LoginUser = {
                name: displayName,
                email: email,
                photo: photoURL
            }
            setLoggedInUser(LoginUser);   
            history.replace(from);
        })
          .catch(error => {
              console.log(error);
              console.log(error.message);      
          });
    }
    const signInWithFb = () =>{
        firebase.auth().signInWithPopup(fbProvider)
            .then(result => {    
            const {displayName,email,photoURL} = result.user;
            const LoginUser = {
                name: displayName,
                email: email,
                photo: photoURL
            }
            setLoggedInUser(LoginUser);
            history.replace(from);
          })
          .catch(error => {
            console.log(error);
            console.log(error.message);
            
          });
    }
    const CheckEmailPassword = (e) =>{
        let isFieldValid = true;
        if(e.target.name == 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            
        }
        if(e.target.name === 'password'){
            const isPasswordLength = e.target.value.length > 6;
            const isPasswordhasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordLength && isPasswordhasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...loggedInUser}
            newUserInfo[e.target.name] = e.target.value; 
            setLoggedInUser(newUserInfo);    
        }
        e.preventDefault();
    }
    const handleLogin = (e) =>{
        if(loggedInUser.email && loggedInUser.password){
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res =>{
                console.log(res);
            })
            .catch(error => {
                
                console.log(error.code);
                console.log(error.message);
                
              });
              
        }
        e.preventDefault()
    }
    return (
        <>
        
        <form onClick={handleLogin} style={{width:'350px', padding:'40px', marginLeft:'40%', border:'1px solid lightgray'}}>
            <h3>Login</h3>
            <br/>
            <input type="text"  className='form-control' name="email" onBlur={CheckEmailPassword} placeholder='Username or Email' required/>
            <br/>
            <input type="password" className='form-control' onBlur={CheckEmailPassword}   name="password" id="" placeholder='Enter password' required/>
            <br/>
            <input type="checkbox" name="Remember Me" id=""/>
            <label htmlFor="rememberMe"> Remember Me</label>
            <br/>
            <button className='btn-lg btn-success' type='submit' >Login</button>
        </form>
        <br/>
         <div style={{marginLeft:'40%', marginRight:"35%"}}>
            <button className='btn btn-warning'  onClick={signInWithGoogle}>Contineu With Google</button>
            <hr/>
            <button className='btn btn-warning' onClick={signInWithFb}>Contineu With Facebook</button>
         </div>

        </>
       
      
    
    );
};

export default Login;