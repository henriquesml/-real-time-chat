import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

import './style.css'

export default function Messages({ messages, name }){

  return (
    <ScrollToBottom className='scroll'>
      {messages.map((message, i) => messages[i-1] && messages[i-1].user && messages[i-1].user != message.user ?
          <Message key={i} message={message} name={name}/>
          :
          <Message lastUser={true} key={i} message={message} name={name}/>
        )}
    </ScrollToBottom>
  )
}
