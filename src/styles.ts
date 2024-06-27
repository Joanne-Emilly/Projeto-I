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
    background-color: #101828;
    #root {
      height: 100%;
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-weight: 400;
      display: flex;
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
  a {
  font-size: 3rem;
  }
  p {
  font-size: 2rem;
  }
  
   .Toastify__toast--success {
    font-size: 4rem;
  }
  .Toastify__toast--warning {
    font-size: 4rem;
  }
  .Toastify__toast--error {
    font-size: 4rem;
  }
  .test {
    span {
      font-size: 4rem;
      color: white;
    }
    h1, p {
    text-align: center;
    }
    img {
      display: block;
      margin: 30px auto !important;
      margin: auto;
      border-radius: 100%;
      width: 180px;
      height: 180px
    }
  }
`;

export default GlobalStyle;
