import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  h1 {
    margin-bottom: 30px;
    text-align: center;
    font-size: 2rem;
  }
  > .selects {
    > select {
      margin: 0px 15px;
    }
  }
  > .show {
    > div {
      background-color: #2c4756;
      border-radius: 15px;
      padding: 5px;
      margin: 15px;
    }
  }
  > .inputs {
    margin-top: 30px;
    display: flex;
    > input {
      margin: 0px 15px;
    }
  }
`;
