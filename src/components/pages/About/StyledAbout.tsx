import { styled } from 'styled-components';

export default styled.main`
  h1 {
    text-align: center;
    font-family: cormorant-infant-bold;
    font-size: 1.8rem;
    line-height: 1;
    margin-bottom: 25px;
  }
  h1 b {
    font-family: cormorant-infant-reg;
    font-size: 1.8rem;
  }
  .opening-blurb img {
    width: calc(104px / 1.1);
    height: calc(138px / 1.1);
    border: 1px solid #817e7e;
    float: left;
    margin: 6px 12px 0px 0px;
  }
  .opening-blurb {
    /* display: flex; */
  }
  #color-note-img .word-wrapper {
    position: absolute;
    left: 0;
  }
  #color-note-img .single-word {
    text-align: left;
  }
`;
