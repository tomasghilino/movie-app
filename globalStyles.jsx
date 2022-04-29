import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root{
        --primary: #db0000;
        --black: #000000;
        --white: #ffffff;
        --gray: #564d4d;
        --bright: #e6e6e6;
        --darkRed: #831010;
        --navgradient: radial-gradient(circle,rgba(27, 27, 27, .9) 15%,rgba(3, 3, 3, 1) 100%);
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
        background-color: #c3c3c3;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    a , h1 , h2 , h3 , p {
        font-family: var(--roboto);
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
