import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar'

export const PeopleList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(100% - 300px);
  top: 70px;
  background:   rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'flex' : 'none')};
  padding: 10px 30px;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid   rgba(0, 0, 0, 0.8);
  }

  .peopleDiv {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  h1 {
    color: #fff;
    font-size: 18px;
  }
  h2 {
    color: #FFF;
    font-size: 14px;
  }

  img {
    margin-right: 5px;
    height: 5px;
  }
`
export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
`