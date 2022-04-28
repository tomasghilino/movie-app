import styled from 'styled-components';

export const FooterLayout = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
`;

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem;

    border-top: 2px solid var(--gray);
    background: radial-gradient(circle, rgba(27,27,27,1) 15%, rgba(3,3,3,1) 100%);
`;

export const FooterIcons = styled.div`
    display: flex;
    gap: 2rem;
    font-size: 3rem;
    color: var(--primary);

    svg{
        &:hover{
            color: var(--white);
            cursor: pointer;
        }
    }
`;

export const FooterButtons = styled.div`
    display: flex;
    gap: 1rem;

    
    a {
        text-decoration: none;
        color: var(--white);
        font-size: 1.4rem;
        padding-right: 1rem;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            background-color: var(--primary);
            height: 100%;
            width: 1px;
            border-radius: 50%;
        }

        &:nth-last-child(1){
            &::after{
                display: none;
            }
        }

        &:hover{
            cursor: pointer;
            color: var(--primary);
        }

    }

    
    
`;

export const FooterBottomText = styled.p`
    font-size: 1.1rem;
    text-align: center;
    color: var(--white);
    border-top: 1px solid black;

    background: radial-gradient(circle, rgba(68,68,68,1) 15%, rgba(3,3,3,1) 100%);
`;