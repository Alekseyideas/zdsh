import React from 'react';
import styled from 'styled-components';

interface ButtonsProps {
  title: string | React.ReactNode;
  onClick?: () => void;
  classes?: string;
  href?: string;
  type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
  isOutline?: boolean;
  disabled?: boolean;
  tooltip?: string;
}

export const Button: React.FC<ButtonsProps> = ({
  type = 'primary',
  onClick,
  title,
  isOutline,
  disabled,
  classes,
  tooltip,
}) => {
  return (
    <BtnS
      type="button"
      className={`btn btn-${isOutline ? 'outline-' : ''}${type}${classes ? ` ${classes}` : ''}`}
      onClick={onClick}
      disabled={disabled}
      // {...d}
    >
      {title}
      {tooltip ? <TooltipS>{tooltip}</TooltipS> : null}
    </BtnS>
  );
};
export const ButtonLink: React.FC<ButtonsProps> = ({
  type = 'primary',
  title,
  isOutline,
  href,
  classes,
  tooltip,
}) => {
  return (
    <BtnLinkS
      type="button"
      target="_blank"
      className={`btn btn-${isOutline ? 'outline-' : ''}${type}${classes ? ` ${classes}` : ''}`}
      href={href}
      // {...d}
    >
      {title}
      {tooltip ? <TooltipS>{tooltip}</TooltipS> : null}
    </BtnLinkS>
  );
};

const TooltipS = styled.span`
  visibility: hidden;

  margin-top: 5px;
  background-color: #474747;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
  /* Position the tooltip */
  position: absolute;
  white-space: nowrap;
  z-index: 1;
`;

const BtnS = styled.button`
  position: relative;

  &:hover {
    ${TooltipS} {
      visibility: visible;
    }
  }
`;
const BtnLinkS = styled.a`
  position: relative;

  &:hover {
    ${TooltipS} {
      visibility: visible;
    }
  }
`;
