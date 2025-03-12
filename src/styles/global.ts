import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 1540px;
    padding: 1rem;
    margin: 0 auto;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;

    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
    }
    input[type=number] { 
      -moz-appearance: textfield;
      appearance: textfield;

    }
  }

  button {
    border: none;
    cursor: pointer;
  }
`
