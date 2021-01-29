import { Base64 } from 'js-base64';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Alert } from '../components/Alerts';
import { Spinner } from '../components/Spinner';
import { Button, FontIcon } from '../components/ui';
import { AppState } from '../store/applicationState';
import { addToMyR, getTechniquesR, removeFromMyR } from '../store/techniques/actions';
import { callApi } from '../utils/callApi';
import { MAIN_BTNS, ROUTE_PATH } from '../utils/consts';
import { isInMy } from '../utils/isMy';
import { MainWrapper } from '../wrappers/MainWrapper';
import { Crumbs, ICrumb } from './Crumbs';

interface RouteParams {
  id: string;
}

interface CardProps {
  isMy?: boolean;
}

enum IBtnNum {
  'download' = 0,
  'print' = 1,
  'clone' = 2,
  'remove' = 3,
}
export const Card: React.FC<CardProps> = ({ isMy }) => {
  const { Techniques } = useSelector((store: AppState) => store);
  const [body, setBody] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const backPath = ROUTE_PATH[isMy ? 'myCards' : 'techniques'];
  const crumbs: ICrumb[] = [
    {
      title: 'Головна',
      isLink: true,
      path: ROUTE_PATH.home,
      id: 1,
    },
    {
      title: isMy ? 'Моя картотека прийомів' : 'Навчальні прийоми',
      isLink: true,
      path: backPath,
      id: 2,
    },
    {
      title: id,
      isLink: false,
      active: true,
      id: 3,
    },
  ];

  const add = () => dispatch(addToMyR({ id: Number(id) }));
  const remove = () => dispatch(removeFromMyR({ id: Number(id) }));
  const callTechniques = React.useCallback(() => {
    dispatch(getTechniquesR());
  }, [dispatch]);

  React.useEffect(() => {
    getData();
    async function getData() {
      try {
        const data = await callApi('get', './data/card-1.json');
        setBody(data.html);
      } catch (e) {
        const message = JSON.stringify(e);
        setError(message);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  React.useEffect(() => {
    if (!Techniques.data.all[0]) {
      console.log(111);
      callTechniques();
    }
  }, [Techniques.data.all, callTechniques]);

  const renderBtnText = (btnNum: IBtnNum) => (
    <>
      <FontIcon name={MAIN_BTNS[btnNum].icon} />
      <span className="ms-2">{MAIN_BTNS[btnNum].title}</span>
    </>
  );

  let bodyHtml = (
    <div
      className="mt-5 d-flex justify-content-center align-items-center"
      style={{ minHeight: '300px' }}
    >
      <Spinner />
    </div>
  );

  if (Techniques.loaded && !loading && !error) {
    const iconT = (
      <>
        <FontIcon name="bi-arrow-left" /> <span>Повернутися до каталогу</span>
      </>
    );

    const isIn = isInMy(Number(id), !!isMy, Techniques.data.my);
    bodyHtml = (
      <>
        <div className="d-flex mb-5" style={{ maxWidth: '900px' }}>
          <Button title={iconT} onClick={() => history.push(backPath)} classes="me-3" />
          <Button title={renderBtnText(IBtnNum.download)} onClick={() => null} classes="me-3" />
          <Button title={renderBtnText(IBtnNum.print)} onClick={() => null} classes="me-3" />
          {isIn ? (
            <Button title={renderBtnText(IBtnNum.remove)} onClick={remove} classes="me-3" />
          ) : (
            <Button title={renderBtnText(IBtnNum.clone)} onClick={add} classes="me-3" />
          )}

          {/* <Button title={renderBtnText(3)} onClick={() => null} classes="me-3" /> */}
        </div>
        <div
          style={{ maxWidth: '900px' }}
          dangerouslySetInnerHTML={{ __html: Base64.decode(body) }}
        />
        <div className="d-flex mt-5">
          <Button
            title={iconT}
            onClick={() => history.push(ROUTE_PATH.techniques)}
            classes="me-3"
          />
          <Button title={renderBtnText(IBtnNum.download)} onClick={() => null} classes="me-3" />
          <Button title={renderBtnText(IBtnNum.print)} onClick={() => null} classes="me-3" />
          {isIn ? (
            <Button title={renderBtnText(IBtnNum.remove)} onClick={remove} classes="me-3" />
          ) : (
            <Button title={renderBtnText(IBtnNum.clone)} onClick={add} classes="me-3" />
          )}
          {/* <Button title={renderBtnText(3)} onClick={() => null} classes="me-3" /> */}
        </div>
      </>
    );
  }

  if (Techniques.loaded && !loading && error) {
    bodyHtml = (
      <div style={{ maxWidth: '900px' }}>
        <Alert text={error} />
      </div>
    );
  }
  return (
    <MainWrapper>
      <div className="container">
        <Crumbs data={crumbs} />
        <WrapperS className="container pt-5">{bodyHtml}</WrapperS>
      </div>
    </MainWrapper>
  );
};

const WrapperS = styled.div`
  h1 {
    margin-bottom: 40px;
  }
  h2,
  h3,
  h4,
  h5,
  p,
  h6 {
    margin-bottom: 20px;
  }

  .btn {
    min-width: 280px;
  }
`;
