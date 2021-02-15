import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion } from '../components/Accordion';
import { Crumbs, ICrumb } from '../components/Crumbs';
import { SuccesDelete } from '../components/Modals/SuccesDelete';
import { Spinner } from '../components/Spinner';
import { AppState } from '../store/applicationState';
import { getTechniquesR } from '../store/techniques/actions';
import { ITechniqe } from '../store/techniques/types';
import { ROUTE_PATH } from '../utils/consts';
import { getMyTechniques } from '../utils/getMyTechniques';
import { MainWrapper } from '../wrappers/MainWrapper';

interface MyCardsProps {}

export const MyCards: React.FC<MyCardsProps> = () => {
  const { Techniques, Modals } = useSelector((state: AppState) => state);
  const [myTech, setMyTech] = React.useState<ITechniqe['all']>([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!Techniques.loaded) {
      dispatch(getTechniquesR());
    }
  }, [Techniques.loaded, dispatch]);

  const crumbs: ICrumb[] = [
    {
      title: 'Головна',
      isLink: true,
      path: ROUTE_PATH.home,
      id: 1,
    },
    {
      title: 'Моя картотека прийомів',
      isLink: false,
      active: true,
      id: 2,
    },
  ];

  React.useEffect(() => {
    if (Techniques.data && Techniques.data.my[0]) {
      const { all, my } = Techniques.data;
      const techniques = getMyTechniques(all || [], my || []);
      setMyTech(techniques);
    } else {
      setMyTech([]);
    }
  }, [Techniques.data]);

  let body = (
    <div className="mt-5 d-flex justify-content-center">
      <Spinner />
    </div>
  );

  if (Techniques.loaded && myTech && myTech[0]) {
    body = <Accordion data={myTech} isMy />;
  }

  if (Techniques.loaded && !myTech[0]) {
    body = <p>Ви ще нічого не додали</p>;
  }

  return (
    <MainWrapper>
      <>
        <div className="container">
          <Crumbs data={crumbs} />
          <h1 className="mt-4 mb-4">Моя картотека прийомів</h1>
          {body}
        </div>
        {Modals.successRemoveModal.isOpen ? (
          <SuccesDelete title={'Успішно'} desc="Прийом видалений з вашої картотеки" />
        ) : null}
      </>
    </MainWrapper>
  );
};
