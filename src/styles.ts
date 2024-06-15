import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
  height: 100vh;
  
    background-color: #949494;
    #root {
      height: 100%;
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;
      color-scheme: light dark;
      color: rgba(255, 255, 255, 0.87);

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
  h1 {
    font-size: 2rem;
  }
`;

export default GlobalStyle;
