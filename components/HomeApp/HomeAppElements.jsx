import styled from 'styled-components';

export const Hero = styled.div`
  position: relative;
  text-align: center;
  height: 100vh;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(70%);
  }
`;

export const HeroDesc = styled.div`
  position: absolute;
  max-width: min-content;

  top: 70%;
  left: 20%;
  transform: translate(-50%, -50%);

  h1 {
    color: white;
    font-size: 7rem;
    width: 100%;
    text-shadow: -3px 2px 4px rgba(0, 0, 0, 0.41);
  }

  p {
    font-size: 3rem;
    color: white;
    margin-top: 1rem;
    text-shadow: -3px 2px 4px rgba(0, 0, 0, 0.41);
  }
`;

export const HeroCTA = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  button {
    padding: 2.6rem;
    font-size: 2rem;
    border-radius: 1rem;
    border: none;
    background-color: black;
    color: white;
    transition: all 0.3s ease;
    width: 200px;

    &:hover {
      cursor: pointer;
      background-color: gray;
    }

    &:last-child {
      background-color: var(--darkRed);
    }
  }
`;

// MAIN APP SECTION
