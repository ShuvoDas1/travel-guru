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
            const newUserInfo = {
                name: displayName,
                email: email,
                photo: photoURL
            }
            setLoggedInUser(newUserInfo);   
            history.replace(from);
          }).catch(error => {
              console.log(error);
              console.log(error.message);      
          });
    }
    const signInWithFb = () =>{
        firebase.auth().signInWithPopup(fbProvider)
            .then(result => {    
            const user = result.user;
            console.log(user);
          })
          .catch(error => {
            console.log(error);
            console.log(error.message);
            
          });
    }
    return (
        
        <form style={{width:'350px', marginLeft:'40%'}}>
            <h3>Login</h3>
            <br/>
            <input type="text"  className='form-control' placeholder='Username or Email' />
            <br/>
            <input type="password" className='form-control' name="" id="" placeholder='Enter password'/>
            <br/>
            <input type="checkbox" name="Remember Me" id=""/>
            <label htmlFor="rememberMe"> Remember Me</label>
            <a href="#" style={{marginLeft:'80px'}}>Forget Password</a>
            <br/>
            <button className='btn-lg btn-success' >Login</button>
            <hr/>
            <button className='btn btn-warning'  onClick={signInWithGoogle}>Contineu With Google</button>
            <hr/>
            <button className='btn btn-warning' onClick={signInWithFb} >Contineu With Facebook</button>
        </form>
       
      
    
    );
};

export default Login;