import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  > .selects {
    > select {
      margin: 0px 15px;
    }
  }
  > .inputs {
    margin-top: 30px;
    display: flex;
    > input {
      border: none;
      margin: 0px 15px;
    }
  }
`;
