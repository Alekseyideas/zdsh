import React from 'react';
import styled from 'styled-components';
import { Footer } from '../components/Footer';

interface MainWrapperProps {
  children: React.ReactChild;
}

export const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  return (
    <WrapperS>
      <main>{children}</main>
      <Footer />
    </WrapperS>
  );
};

const WrapperS = styled.div`
  padding-top: 113px;
`;
