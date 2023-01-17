import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import React, { useEffect ,useState } from "react";
import './EmailList.css'
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import Section from "./Section";
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList(){
    const [emails,setEmails]  = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp','desc').onSnapshot(snapshot => setEmails(snapshot.docs.map((doc) =>({
            id:doc.id,
            data:doc.data(),
        })) 
        )
        );
    },[]);

    return(
        <div className="EmailList">
            <div className="EmailList_settings">
                <div className="EmailList_settingsleft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>

                <div className="EmailList_settingsright">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
                <div className="EmailList_sections">
                    <Section Icon={InboxIcon} title="Primary" color = "red" selected/>
                    <Section Icon={PeopleIcon} title="Social" color = "Blue" />
                    <Section Icon={LocalOfferIcon} title="Promotions" color = "green" />
                </div>
                    <div className="EmailList_list">
                    {emails.map(({id,data : {to,subject,message,timestamp}}) => (
                        <EmailRow
                            id = {id}
                            key = {id}
                            title={to}
                            subject = {subject}
                            description = {message}
                            // time = {new Date(timestamp?.seconds *1000).toUTCString()}
                            time = {new Date(timestamp?.seconds*1000).toUTCString()}

                        />
                    ))}
                   

                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                <div>
                    <EmailRow title="RMV" subject="Hello Ruby!!!!" description="This is a mail" time="12:00 p.m"/>
                </div>
                </div>
            </div>
    );
}

export default EmailList;