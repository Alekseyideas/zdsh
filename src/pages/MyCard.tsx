import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card } from '../components/Card';
import { SuccesClone } from '../components/Modals';
import { SuccesDelete } from '../components/Modals/SuccesDelete';
import { AppState } from '../store/applicationState';
import { ROUTE_PATH } from '../utils/consts';

interface MyCardProps {}

export const MyCard: React.FC<MyCardProps> = () => {
  const { Modals } = useSelector((state: AppState) => state);
  const history = useHistory();
  return (
    <>
      <Card isMy />
      {Modals.successCloneModal.isOpen ? (
        <SuccesClone title={'Успішно'} desc="Прийом доданий до вашої картотеки" />
      ) : null}
      {Modals.successRemoveModal.isOpen ? (
        <SuccesDelete
          title={'Успішно'}
          desc="Прийом видалений з вашої картотеки"
          closeHandler={() => history.push(ROUTE_PATH.myCards)}
        />
      ) : null}
    </>
  );
};
