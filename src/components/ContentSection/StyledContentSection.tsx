import { styled } from 'styled-components';

export default styled.section`
  flex-basis: 100%;
  margin: 0 0 15px 0;
  padding: 0px 25px 0px 25px;
  .large-heading {
    font-family: cormorant-infant-bold;
    font-size: clamp(1.6rem, 4vw, 2.7rem);
    margin-bottom: 1px;
  }
  .small-heading {
    margin-top: 3px;
    font-family: cormorant-infant-bold, sans-serif;
    font-size: clamp(1rem, 2.1vw, 1.8rem);
  }
  .paragraph-content {
    font-family: semplicita, sans-serif;
    line-height: 1.3;
    font-size: clamp(0.75rem, 1.3vw, 1.1rem);
  }

  @media screen and (min-width: 700px) {
    flex-basis: 45%;
    .large-heading {
      line-height: 1;
    }
    .small-heading {
      margin-bottom: 0;
    }
    .paragraph-content {
      margin-bottom: 0;
      width: 90%;
    }
  }
`;
