import styled from 'styled-components';

export const Welcome = styled.div`
  display: flex;
  width: 260px;
  margin-left: 40px;
  margin-top: ${props => props.lastUser ? '0px' : '30px'};
  margin-bottom: 10px;
  background: #111;
  border-radius: 4px;
  padding: 15px 15px;

  p {
    color: #eee;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  margin-top: ${props => props.lastUser ? '0px' : '30px'};
  margin-bottom: 10px;
  justify-content: ${props => props.currentUser ? 'flex-end' : 'flex-start'};
  padding: 0 30px;
  align-items: flex-start;

  img {
    border-radius: 4px;
  }
`;

export const SentText = styled.p`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #EEE;
  letter-spacing: 0.3px;
  margin-bottom: 5px;
`

export const MessageBox = styled.div`
  display: flex;
  min-width: 260px;
  background: #111;
  border-radius: 4px;
  padding: 15px 15px;

  p {
    color: #eee;
  }
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-items: ${props => props.currentUser ? 'flex-end' : 'flex-start'};
`;
