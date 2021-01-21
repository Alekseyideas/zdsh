import React from 'react';
import styled from 'styled-components';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <WrapperS>
      <span>© {new Date().getFullYear()} Цифрове видавництво MCFR </span>
    </WrapperS>
  );
};

const WrapperS = styled.footer`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2e2e2e;
  color: rgba(215, 215, 215, 0.8);
  font-size: 12px;
  margin-top: 100px;
`;
