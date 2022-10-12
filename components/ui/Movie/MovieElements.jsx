import styled from 'styled-components';

export const MovieContainer = styled.div`
  height: 500px;
  background-color: red;
  position: relative;
  background: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const MovieCTAButton = styled.button`
  margin: 2rem;
  padding: 1.2rem;
  font-size: 2rem;
  border-radius: 1rem;
  border: none;
  background-color: #0000008f;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: gray;
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 2rem;
  padding: 1.2rem;
  font-size: 2rem;
  border-radius: 1rem;
  border: none;
  background-color: ${(props) =>
    props.inFavorites ? '#ff00009a' : '#7271719a'};
  color: white;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
  }
`;
