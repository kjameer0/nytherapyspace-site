import { styled } from 'styled-components';

export default styled.li<{$activeLink: boolean }>`
  display: inline-block;
  position: relative;
  top: 59%;
  font-family: semplicita, sans-serif;
  /* border: 1px solid red; */
  width: 100px;
  height: 30px;
  .path-name {
    margin-right: 9px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-bottom: 0px solid black;
    border-bottom-width: ${props => props.$activeLink ? '1px' : '0px'} ;
    text-decoration: none;
    color: black;
  }
  a:hover {
    border-bottom: 1px solid black;
  }
  @media screen and (max-width: 700px) {
    visibility: hidden;
  }
`;
