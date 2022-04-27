import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root{
        --primary: #db0000;
        --black: #000000;
        --white: #ffffff;
        --gray: #564d4d;
        --darkRed: #831010;
        --roboto: 'Roboto', sans-serif;
    }

    /* apply a natural box layout model to all elements, but allowing components to change */
    html {
    box-sizing: border-box;
        /* 1rem = 10px */
        font-size: 62.5%;
    }
    *, *:before, *:after {
    box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        background-color: gray;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    a , h1 , h2 , h3 , p {
        font-family: var(--roboto);
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
