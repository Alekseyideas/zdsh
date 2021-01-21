import React from 'react';
import { MainWrapper } from '../wrappers/MainWrapper';

interface CardProps {}

export const Card: React.FC<CardProps> = () => {
  return (
    <MainWrapper>
      <div className="container">
        <h1>Test</h1>
      </div>
    </MainWrapper>
  );
};
