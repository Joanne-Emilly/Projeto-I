import { SelectHTMLAttributes } from 'react';

import { SelectStyle } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select = ({ children, ...rest }: SelectProps) => {
  return (
    <>
      <SelectStyle {...rest}>{children}</SelectStyle>
    </>
  );
};

export default Select;
