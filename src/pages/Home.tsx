import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppState } from '../store/applicationState';
import { ROUTE_PATH } from '../utils/consts';
import { MainWrapper } from '../wrappers/MainWrapper';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { User } = useSelector((store: AppState) => store);

  return (
    <MainWrapper>
      <div className="container">
        <WrapperTextS className="text-center pt-5">
          <h1>Навчальні прийоми: інтерактивна карта</h1>
          <p className="mt-4">
            Щоб переглянути прийом, оберіть навчальну технологію, якої він стосується. Наприклад,
            клікніть вкладку «Кейс-технологія». У випадному списку оберіть навчальний прийом,
            приміром «Ситуаційне завдання». Перегляньте картку з описом прийому. Скачайте її або
            роздрукуйте за допомогою відповідних кнопок. Щоб зберегти навчальний прийом у власній
            картотеці прийомів, клікніть «Копіювати». Щоб повернутися до переліку прийомів, клікніть
            на відповідну кнопку наприкінці картки.
          </p>

          {User.data && !User.data.error && (User.data.isAuth || User.data.isDemo) ? (
            <div className="mt-4">
              <Link
                className="btn btn-primary me-4"
                to={ROUTE_PATH.techniques}
                style={{ minWidth: '280px' }}
              >
                Навчальні прийоми
              </Link>
              <Link
                className="btn btn-primary"
                to={ROUTE_PATH.myCards}
                style={{ minWidth: '280px' }}
              >
                Моя картотека прийомів
              </Link>
            </div>
          ) : (
            <div className="mt-4">
              <span className="btn btn-primary me-4" style={{ minWidth: '280px' }}>
                Навчальні прийоми
              </span>
              <span className="btn btn-primary" style={{ minWidth: '280px' }}>
                Моя картотека прийомів
              </span>
            </div>
          )}

          {User.data.error ? (
            <div
              style={{ textAlign: 'center' }}
              className="alert alert-danger mt-4"
              role="alert"
              dangerouslySetInnerHTML={{ __html: User.data.error }}
            />
          ) : null}
        </WrapperTextS>
      </div>
    </MainWrapper>
  );
};

const WrapperTextS = styled.div`
  max-width: 900px;
  margin: auto;
`;
