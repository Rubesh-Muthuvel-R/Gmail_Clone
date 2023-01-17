import { IconButton } from "@material-ui/core";
import React from "react";
import './Mail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/MailSlice";

function Mail(){
    const navigate = useNavigate();
    const selectedMail = useSelector(selectOpenMail);
    // const sub = selectedMail.title;
    console.log(selectedMail);
    return(
        <div className="Mail">
            <div className="Mail_tools">
                <div className="Mail_toolsleft">
                    <IconButton onClick={() => navigate("/")}>
                        <ArrowBackIcon/>
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>

                    <IconButton>
                        <ErrorIcon/>
                    </IconButton>

                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>

                    <IconButton>
                        <EmailIcon/>
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon/>
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon/>
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>

                <div className="Mail_toolsright">
                    <IconButton>
                        <UnfoldMoreIcon/>
                    </IconButton>

                    <IconButton>
                        <PrintIcon/>
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="Mail_body">
                <div className="Mail_bodyheader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className="Mail_important"/>
                    <p>{selectedMail?.title}</p>
                    <p className="Mail_time">{selectedMail?.time}</p>
                </div>

                <div className="Mail_message">
                    <p>{selectedMail?.description}</p>   
                </div>
            </div>

        </div>
    );
}

export default Mail;