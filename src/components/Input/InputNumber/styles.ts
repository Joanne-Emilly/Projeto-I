import styled from 'styled-components';

export const InputNumberStyle = styled.input`
  background-color: #fafafa;
  border-radius: 10px;
  color: #333;
  border: 1px solid #00ffff;
  height: 60px;
  width: 100%;
  max-width: 250px;
  font-size: 2rem;
  text-indent: 15px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
