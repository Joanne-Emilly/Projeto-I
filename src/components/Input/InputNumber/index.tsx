import { InputHTMLAttributes } from 'react';

import { InputNumberStyle } from './styles';

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputNumber = ({ ...rest }: InputNumberProps) => {
  return (
    <>
      <InputNumberStyle {...rest} />
    </>
  );
};

export default InputNumber;
