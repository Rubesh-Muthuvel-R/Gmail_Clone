import React from "react";
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@material-ui/core";
import {useForm} from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/MailSlice";
import {db} from "./firebase";
// import firebase from "firebase/compat/app";
// import firebase from 'firebase/app';
import 'firebase/firestore';
import { serverTimestamp } from "firebase/firestore";

function SendMail(){
    const {register,handleSubmit,watch,formState:{errors}}  =useForm();
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
            to:formData.to,
            subject:formData.subject,
            message:formData.message,
            timestamp : serverTimestamp(),
        });
        dispatch(closeSendMessage());
    };
    
    return(
        <div className="SendMail">
            <div className="SendMail_header">
                <h3>New Message</h3>
                <CloseIcon onClick = {()=>dispatch(closeSendMessage())} className="SendMail_close"/>
            </div>

            <form onSubmit={handleSubmit((onSubmit))}>

                <input name="to" placeholder='To' type="email" {...register("to",{required:true})} />
                {errors.to && <p className="SendMail_error">To is required!!!</p>}
                <input name="subject" placeholder='Subject' type="text" {...register("subject",{required:true})} />
                {errors.subject && <p className="SendMail_error">Subject is required!!!</p>}
                <input name="message" placeholder='Message..' type="text" className="SendMail_message" {...register("message",{required:true})} />
                {errors.message && <p className="SendMail_error">Message is required!!!</p>}

                <div className="SendMail_options">
                    <Button className="SendMail_send" varient="container" type="submit">Send</Button>
                </div>

            </form>
        </div>
    );
}

export default SendMail;