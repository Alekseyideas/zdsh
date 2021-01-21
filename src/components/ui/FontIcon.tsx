import React from 'react';

interface FontIconProps {
  name: string;
}

export const FontIcon: React.FC<FontIconProps> = ({ name }) => {
  return <i className={`bi ${name}`} />;
};
