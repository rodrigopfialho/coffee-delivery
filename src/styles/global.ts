import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        -webkit-font-smoothing: antialiased;
    }

    body {
        max-width: 1440px;
        margin: 0 auto ;
    }
`;