import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const Login = () => {
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
            // console.log(result.user);
            const LoginUser = {
                name: displayName,
                email: email,
                photo: photoURL,
                
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
                photo: photoURL,
               
            }
            setLoggedInUser(LoginUser);
            history.replace(from);
          })
          .catch(error => {
            console.log(error);
            console.log(error.message);
            
          });
    }
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
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
       
    }
    const handleLogin = (e) =>{
        firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then(res =>{
            const newUserInfo = {...loggedInUser}
            newUserInfo.success = true;
            newUserInfo.error = '';
            setLoggedInUser(newUserInfo);
            history.replace(from);
        })
        .catch(error =>{
            const newUserInfo = {...loggedInUser};
            newUserInfo.error = error.message;
            newUserInfo.success= false;
            setLoggedInUser(newUserInfo)
          });
          e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleLogin} style={{width:'450px', padding:'40px',marginTop:'5px', marginLeft:'35%', border:'1px solid lightgray'}}>
                <h1>Login</h1>
                <br/>
                <input type="text"  className='form-control' name="email" onBlur={CheckEmailPassword} placeholder='Username or Email' required/>
                <br/>
                <input type="password" className='form-control' onBlur={CheckEmailPassword}   name="password" id="" placeholder='Enter password' required/>
                <br/>
                <button className='btn-lg btn-success' type='submit'>Login</button>
                <p>Don't have an accont <Link to='/signup'>Create an account</Link> </p> 
            </form>
            <br/>
                {
                loggedInUser.isLogin === false && <p style={{color:'red',textAlign:'center'}}>{loggedInUser.error}</p>
                }
            
            <div style={{marginLeft:'40%', marginRight:"35%"}}>
            <button className='btn btn-warning'  onClick={signInWithGoogle}>Contineu With Google</button>
            <hr/>
            <button className='btn btn-warning' onClick={signInWithFb}>Contineu With Facebook</button>
         </div>
                
        </div>
    );
};

export default Login;