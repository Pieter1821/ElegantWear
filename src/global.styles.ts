import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    padding: 16px 24px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f5f7fb;
    color: #1f2937;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  a {
  text-decoration: none;
  color: inherit;
  }
  
  * {
    box-sizing: border-box;
  }
  
  /* Responsive container helper */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }
  
  @media (max-width: 800px) {
    body { padding: 12px; }
  }
`;
