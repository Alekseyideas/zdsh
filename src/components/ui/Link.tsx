import React from 'react';

interface LinkProps {
  to: string;
  classes?: string;
  title: string;
}

export const Link: React.FC<LinkProps> = ({ to, classes, title }) => {
  return (
    <a className={`text-decoration-none ${classes}`} href={to}>
      {title}
    </a>
  );
};
