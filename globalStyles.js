import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    /* apply a natural box layout model to all elements, but allowing components to change */
    html {
    box-sizing: border-box;
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
`;

export default GlobalStyle;
