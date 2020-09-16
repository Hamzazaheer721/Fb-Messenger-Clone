import { Card, CardContent, Typography } from '@material-ui/core';
import React, {forwardRef} from 'react';
import './Message.css';
import db from '../firebase/firebase';
import firebase from 'firebase';



const Message = forwardRef(({message, username}, ref) => {
   
    const isUser = message.username === username;
    var filter = (message.username === null)? "Guest : " : `${message.username} : `;
    
    return (
        <div ref = {ref} className = {`message ${isUser && 'message_user'}`}>
           <Card className = {isUser? "message_userCard" : "message_guestCard"}>
            <CardContent>
            <Typography 
                color = "white"
                variant = "h5"
                component = "h2"
            >
            <b>{!isUser && `${message.username || "Guest : "}`}</b>  {message.message}
            {/*<b>{!isUser && filter}</b>  {message.message} */}
            </Typography>
            </CardContent>  
           </Card>
        </div>
    )
    })

export default Message
