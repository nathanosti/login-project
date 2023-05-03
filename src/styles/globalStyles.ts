import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html, body, #root {
      width: 100%;
      height: 100%;
    }

    body {
      background-color: ${({ theme }) => theme.colors.background.default};
    }

    h1 {
      color: ${({ theme }) => theme.colors.text.primary};
    }
`;
