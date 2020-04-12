import React from 'react';

import { Welcome, MessageContainer, SentText, MessageBox, MessageContent } from './styles'

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name, lastUser = false }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  if (user === 'admin') lastUser = false;

  return (
    isSentByCurrentUser
      ? (
        trimmedName === 'admin' ?
          <Welcome><p>{ReactEmoji.emojify(text)}</p></Welcome>
        :
        <MessageContainer lastUser={lastUser} currentUser={isSentByCurrentUser}>
          <MessageContent currentUser={isSentByCurrentUser}>
          { lastUser ? <></> : <SentText>{trimmedName}</SentText>}
            <MessageBox currentUser={isSentByCurrentUser}>
              <p>{ReactEmoji.emojify(text)}</p>
            </MessageBox>
          </MessageContent>
        </MessageContainer>
        )
        : (
          user === 'admin' ?
            <Welcome><p>{ReactEmoji.emojify(text)}</p></Welcome>
          :
          <MessageContainer lastUser={lastUser} currentUser={isSentByCurrentUser}>
            <MessageContent currentUser={isSentByCurrentUser}>
           { lastUser ? <></> : <SentText>{user}</SentText>}
              <MessageBox currentUser={isSentByCurrentUser}>
                <p>{ReactEmoji.emojify(text)}</p>
              </MessageBox>
            </MessageContent>
          </MessageContainer>
        )
  );
}

export default Message;
