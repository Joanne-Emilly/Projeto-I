import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  > h1 {
    margin-bottom: 30px;
    text-align: center;
  }
  > .selects {
    > select {
      margin: 0px 15px;
      > option {
        font-size: 2rem;
      }
    }
  }
  > .inputs {
    margin-top: 30px;
    display: flex;
    > input {
      margin: 0px 15px;
    }
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
`;
