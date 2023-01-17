import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { auth, provider } from './firebase';
import "./Login.css";

function Login(){

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider).then(({user})=>{
            dispatch(Login({
                displayName :  user.displayName,
                email : user.email,
                photoURL : user.photoURL
            }));
        })
         .catch(error=>alert(error.message));
    };

    return(
        <div className="Login">
            <div className='Login_container'>
                <img src="data:image/png;base64,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" alt="GMAIL" />
            </div>
            <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
        </div>
    )
}

export default Login;