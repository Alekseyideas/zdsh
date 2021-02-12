import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components/Card';
import { SuccesClone } from '../components/Modals';
import { AppState } from '../store/applicationState';

interface DeafultCardProps {}

export const DeafultCard: React.FC<DeafultCardProps> = () => {
  const { Modals } = useSelector((state: AppState) => state);

  return (
    <>
      <Card isMy />
      {Modals.successCloneModal.isOpen ? (
        <SuccesClone title={'Успішно'} desc="Прийом доданий до вашої картотеки" />
      ) : null}
    </>
  );
};
