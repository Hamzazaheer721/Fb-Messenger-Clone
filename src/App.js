import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import db from './firebase/firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import './main_components/Message.css'
import fb_icon from "./image/icon2.jpeg";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import './App.css';
import Message from "./main_components/Message";


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  // useState : variable in REACT
  // useEffect: code on Condition in REACT
  useEffect (()=>{
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })  
  },[])


  useEffect (()=>{
    //code to be executed
    setUserName (prompt('Please enter your Username'))
  }, [] )  //condition
  
  
  const sendMessage = (event)=>{
      event.preventDefault(); //it prevents refreshing due to form submit
      //all logic to send message
      db.collection('messages').add({
        message: input,
        username: userName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      // setMessages([...messages, {username: userName, text: input}])
      setInput('')
      console.log(messages)
  }


  return (
    <div className="App">
      {/*<img src = {fb_icon}></img>*/}
      <img src="https://www.facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" ></img>
      <h1> Welcome {userName}  </h1>
      <form className= "app_form">
        <FormControl className= "app_formControl">
          {/*<InputLabel > Please Enter a Message </InputLabel> */}
          <Input className = "app_input" placeholder= "Please Enter Message" value = {input} onChange ={event => setInput(event.target.value)}/>
          <IconButton className= "app_iconButton" disabled = {!input} variant= "contained" color="primary" type = "submit "onClick= {sendMessage}>
            <SendIcon />
          </IconButton>
          {/*<Button disabled = {!input} variant= "contained" color="primary" type = "submit "onClick= {sendMessage}> Send Message  </Button>
         */} 
         </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => <Message key = {id} username = {userName} message = {message} />)
        }
      </FlipMove>
      
    
      </div>
  );
}

export default App;
