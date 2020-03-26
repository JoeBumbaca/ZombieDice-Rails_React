import React from 'react';

const ChatMessage = ({message}) => {
  return (
    <ul className='chat-message'>
      <li className='message-name'>{message.user_name}:</li>
      <li className='message-body'>{message.body}</li>
    </ul>
  );
};

export default ChatMessage;

