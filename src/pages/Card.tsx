import { Base64 } from 'js-base64';
import React from 'react';
import styled from 'styled-components';
import { Alert } from '../components/Alerts';
import { Spinner } from '../components/Spinner';
import { Button, FontIcon } from '../components/ui';
import { callApi } from '../utils/callApi';
import { MAIN_BTNS } from '../utils/consts';
import { MainWrapper } from '../wrappers/MainWrapper';

interface CardProps {}

enum IBtnNum {
  'download' = 0,
  'print' = 1,
  'clone' = 3,
  'remove' = 4,
}
export const Card: React.FC<CardProps> = () => {
  const [body, setBody] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

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

  if (!loading && !error) {
    bodyHtml = (
      <>
        <div
          style={{ maxWidth: '900px' }}
          dangerouslySetInnerHTML={{ __html: Base64.decode(body) }}
        />
        <div className="d-flex mt-5">
          <Button title={renderBtnText(IBtnNum.download)} onClick={() => null} classes="me-3" />
          <Button title={renderBtnText(IBtnNum.print)} onClick={() => null} classes="me-3" />
          <Button title={renderBtnText(IBtnNum.clone)} onClick={() => null} classes="me-3" />
          {/* <Button title={renderBtnText(3)} onClick={() => null} classes="me-3" /> */}
        </div>
      </>
    );
  }

  if (!loading && error) {
    bodyHtml = (
      <div style={{ maxWidth: '900px' }}>
        <Alert text={error} />
      </div>
    );
  }
  return (
    <MainWrapper>
      <WrapperS className="container pt-5">{bodyHtml}</WrapperS>
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
`;
