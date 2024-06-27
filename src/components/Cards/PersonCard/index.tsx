import { LiHTMLAttributes } from 'react';

import { LiStyle } from './styles';

interface PersonCardProps extends LiHTMLAttributes<HTMLLIElement> {
  firstName: string;
  lastName?: string;
  imgSrc?: string;
}

const PersonCard = ({ firstName, lastName, imgSrc, ...props }: PersonCardProps) => {
  return (
    <LiStyle {...props}>
      <h1>
        {firstName} {lastName}
      </h1>
      <img src={imgSrc} alt="" />
    </LiStyle>
  );
};

export default PersonCard;
