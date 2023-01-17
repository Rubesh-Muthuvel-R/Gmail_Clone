import React from "react";
import './EmailRow.css';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
// import CheckBox from "@mui/icons-material/CheckBox";
import { IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/MailSlice";

function EmailRow({id,title,subject,description,time}){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
         dispatch(
            selectMail({
                id,
                title,
                subject,
                description,
                time,
            })
         );
        //  console.log(time);
         navigate ("/mail");
    };

    return(
        <div onClick={openMail} className="EmailRow">
            
        <div className="EmailRow_options">
            <IconButton>
                <CheckBoxOutlineBlankOutlinedIcon/>
            </IconButton>
            <IconButton>
                <StarBorderOutlinedIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon/>
            </IconButton>
        </div>

        <h3 className = "EmailRow_title">
            {title}
        </h3>

        <div className="EmailRow_message">
            <h4>{subject}{" "}
                <span className="EmailRow_description">
                    {description}
                </span>
            </h4>
        </div>

        <p className="EmailRow_time">
            {time}
        </p>
        
        </div>
    );    
}

export default EmailRow;