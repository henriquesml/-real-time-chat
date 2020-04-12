import React from 'react';
import { MdChatBubble } from 'react-icons/md'
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <MdChatBubble className="onlineIcon" size={25} color='#FFF' />
      <h3>Sala {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a className="sair" href="/">Sair</a>
    </div>
  </div>
);

export default InfoBar;
