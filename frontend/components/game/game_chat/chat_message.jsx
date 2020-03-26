import React from 'react';

const ChatMessage = ({message}) => {
  return (
    <ul className='chat-message'>
      <li>{message.user_id}:</li>
      <li>{message.body}</li>
      {/* <li>{message.created_at}</li> */}
    </ul >
  )
};

export default ChatMessage;