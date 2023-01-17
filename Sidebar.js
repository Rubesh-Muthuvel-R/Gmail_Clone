import React from "react";
import './Sidebar.css';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from "./SidebarOption";
import StarIcon from '@mui/icons-material/Star';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/MailSlice";
// import { useNavigate } from "react-router-dom";


function Sidebar(){
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    return (
        <div className="Sidebar">
            <Button onClick = {() => dispatch(openSendMessage())}
                startIcon={<AddIcon fontSize="large"/>}
                className="Sidebar_compose"
            >Compose</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={54}/>
            <SidebarOption Icon={ScheduleIcon} title="Snoozed" number={54}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={54}/>
            <SidebarOption Icon={NearMeIcon} title="Sent" number={54}/>
            <SidebarOption Icon={DraftsIcon} title="Drafts" number={54}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More"/>

            <div className = "Sidebar_footer">
                <div className = "Sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                        
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>

                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;