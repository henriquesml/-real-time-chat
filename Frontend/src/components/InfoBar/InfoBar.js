import React, { useState } from 'react';
import { MdChatBubble, MdExitToApp } from 'react-icons/md'
import { PeopleList, Scroll } from './styles'
import onlineIcon from '../../icons/onlineIcon.png';

import './InfoBar.css';
export default function InfoBar({ room, users }) {
  const [visible, setVisible] = useState(false)

  return (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <MdChatBubble className="onlineIcon" size={25} color='#FFF' />
      <h3>Sala {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <button className="peoplesOnline" onBlur={(e) => setVisible(false)} onClick={() => setVisible(!visible)} >Pessoas Online</button>
      <PeopleList visible={visible}>
        <Scroll>
          {
              users
              ? (
                <div >
                  <h1>Pessoas Online:</h1>
                    {users.map(({name}) => (
                      <div key={name} className='peopleDiv'>
                        <img alt="Online Icon" src={onlineIcon}/>
                        <h2>
                          {name}
                        </h2>
                      </div>
                    ))}
                </div>
              )
              : <div/>
          }
      </Scroll>
      </PeopleList>
      <a className="sair" href="/"><MdExitToApp size={25} color='#FFF' /></a>
    </div>
  </div>)
};

