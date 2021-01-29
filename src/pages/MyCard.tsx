import React from 'react';
import { Card } from '../components/Card';

interface MyCardProps {}

export const MyCard: React.FC<MyCardProps> = () => {
  return <Card isMy />;
};
