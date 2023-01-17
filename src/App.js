// import { Switch } from '@material-ui/core';
import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import {Route,Routes} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import "./SendMail.js";
import SendMail from './SendMail.js';
import {useSelector} from "react-redux";
import { selectSendMessageIsOpen } from './features/MailSlice';
import { selectUser } from './features/UserSlice';
import Login from './Login';

function App() {
  const sendMessageIsOpen  =useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  return (
    <Router>/

    {/* {!user?(
      <Login/>
    ):( */}

    <div className="App">
    <Header/>
      <div className="App_body">
        
        <Sidebar/>

        <Routes>
          <Route path="/mail" element = {<Mail/>}/>
          <Route path="/" element = {<EmailList/>}/>
        </Routes>
      </div>

      {sendMessageIsOpen && <SendMail/>}

    </div>
    {/* )}  */}
    </Router>
  );
}

export default App;
