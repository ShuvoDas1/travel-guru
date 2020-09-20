import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config.js';
import { UserContext } from '../../App.js';
import { Link, useHistory, useLocation } from 'react-router-dom';

const SignUp = () => {
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
    const handleSignUp = (e) =>{
        if(loggedInUser.email && loggedInUser.password){
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res =>{
                const newUserInfo = {...loggedInUser}
                newUserInfo.success = true;
                newUserInfo.error = '';
                setLoggedInUser(newUserInfo);
            })
            .catch(error => {
                const newUserInfo = {...loggedInUser}
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setLoggedInUser(newUserInfo);
                
              });
              
        }
        e.preventDefault()
    }
    return (
        <>
        
        <form onClick={handleSignUp} style={{width:'400px', padding:'50px', marginLeft:'35%', border:'1px solid lightgray'}}>
            <h3>Create An Account</h3>
            <br/>
            <input type="text" placeholder='First name' name='first name' className='form-control' onBlur={CheckEmailPassword} />
            <br/>
            <input type="text" placeholder='Last Name' className='form-control' name='last name' onBlur={CheckEmailPassword}/>
            <br/>
            <input type="text"  className='form-control' name="email" onBlur={CheckEmailPassword} placeholder='Username or Email' required/>
            <br/>
            <input type="password" className='form-control' onBlur={CheckEmailPassword}   name="password" id="" placeholder='Enter password' required/>
            <br/>
             <button className='btn-lg btn-success' type='submit'>Sign Up</button> 
            <br/>
            <p>Already have an account <Link to='/login'>Login</Link></p>
        </form>
        <br/>
            <p style={{color:'red',textAlign:'center'}}>{loggedInUser.error}</p>
            {loggedInUser.success && <p style={{color:'green',textAlign:'center'}}>User Created Successfully</p>}
        <br/>
         <div style={{marginLeft:'40%', marginRight:"35%"}}>
            <button className='btn btn-warning'  onClick={signInWithGoogle}>Contineu With Google</button>
            <hr/>
            <button className='btn btn-warning' onClick={signInWithFb}>Contineu With Facebook</button>
         </div>

        </>
       
      
    
    );
};

export default SignUp;