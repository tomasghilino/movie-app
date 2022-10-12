import styled from 'styled-components';

export const MovieDetailsLayout = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 80%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
`;

export const MovieDetailsBgImage = styled.img`
    filter: brightness(90%);
    border-radius: 2rem;
`;

export const MovieDetailsContent = styled.div`
    margin: 0 3rem;
`;

export const MovieDetailsTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-bottom: 1rem;

    a {
        font-size: 4rem;
        font-weight: bold;
        text-decoration: none;
        color: var(--primary);

        &:hover {
            cursor: pointer;
        }
    }

    p {
        font-size: 1.8rem;
        font-weight: normal;
    }
`;

export const MovieDetailsOverview = styled.p`
    display: block;
    margin-inline: auto;
    font-size: 1.4rem;
    margin-top: 4rem;
`;

export const MovieDetailsGenres = styled.div`
    display: flex;
    gap: .5rem;
    color: var(--darkRed);

    p {
        ::after {
            content: ' -';
        }
    }
`;