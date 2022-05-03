import styled from 'styled-components';

export const MovieDetailsLayout = styled.div`
    
`;

export const MovieDetailsBgImage = styled.img`
    filter: brightness(90%);
`;

export const MovieDetailsContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 80%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 1rem;
    padding: 2rem;
`;

export const MovieDetailsTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    gap: 2rem;

    a {
        font-size: 4rem;
        text-decoration: none;
        color: var(--primary);

        &:hover {
            cursor: pointer;
        }
    }

    p {
        font-size: 1.5rem;
    }
`;

export const MovieDetailsOverview = styled.p`
    
`;