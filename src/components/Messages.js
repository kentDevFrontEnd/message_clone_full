import React, { forwardRef } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import "./Message.css";
const Messages = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;
  return (
    <Card ref={ref} className={`message ${isUser && "message__user"}`}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {message.username}: {message.message}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default Messages;
