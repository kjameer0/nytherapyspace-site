import { styled } from 'styled-components';

export default styled.ul`
  width: 600px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
