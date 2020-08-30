import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Typography,
} from "@material-ui/core";
import "./App.css";
import Messages from "./components/Messages";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // snapshot.docs.map((doc) => {
        //   console.log(doc.data());
        // });
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
        // console.log(snapshot);
      });
    // db.collection("messages")
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);
    //   });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter your username: "));
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = (e) => {
    // all the logic to send a message goes
    e.preventDefault();
    const newMessage = {
      username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    setInput("");
    // setMessages([...messages, newMessage]);
    db.collection("messages")
      .add(newMessage)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      });
  };

  console.log(messages);
  return (
    <div className="App">
      <Typography variant="h1" component="h1">
        Hello from react app
      </Typography>
      <Typography variant="h2" component="h2">
        {username}
      </Typography>
      <form onSubmit={sendMessage}>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input type="text" value={input} onChange={handleInput} />
          <Button
            variant="contained"
            disabled={!input}
            color="secondary"
            type="submit"
          >
            Send
          </Button>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ message, id }) => {
          return <Messages username={username} message={message} key={id} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
