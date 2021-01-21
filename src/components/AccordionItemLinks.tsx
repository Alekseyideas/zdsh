import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IMethod } from '../store/techniques/types';
import { ROUTE_PATH } from '../utils/consts';
import { Button } from './ui';

interface AccordionItemLinksProps {
  title: string;
  data: IMethod[];
  isShow: boolean;
  onClick: () => void;
  isMy?: boolean;
}

export const AccordionItemLinks: React.FC<AccordionItemLinksProps> = ({
  title,
  data,
  isShow,
  onClick,
  isMy,
}) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${!isShow ? 'collapsed' : ''}`}
          type="button"
          onClick={onClick}
        >
          {title}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isShow ? 'show' : ''}`}>
        <div className="accordion-body">
          <ul className="list-group list-group-flush">
            {data &&
              data[0] &&
              data.map((itm) => (
                <LiS
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={itm.id}
                >
                  <Link to={`${ROUTE_PATH.card}/${itm.id}`} className="d-block">
                    {itm.title}
                  </Link>

                  <div className="d-flex align-items-center">
                    <Button
                      title={<i className="bi bi-download" />}
                      onClick={() => null}
                      isOutline
                      classes="me-2"
                      type="secondary"
                      tooltip="Скачати"
                    />
                    <Button
                      title={<i className="bi bi-printer" />}
                      onClick={() => null}
                      isOutline
                      classes="me-2"
                      type="secondary"
                      tooltip="Роздрукувати"
                    />
                    {isMy ? (
                      <Button
                        title={<i className="bi bi-file-earmark-minus" />}
                        onClick={() => null}
                        isOutline
                        type="secondary"
                        tooltip="Видалити"
                      />
                    ) : (
                      <Button
                        title={<i className="bi bi-file-earmark-plus" />}
                        onClick={() => null}
                        isOutline
                        type="secondary"
                        tooltip="Копіювати"
                      />
                    )}
                  </div>
                </LiS>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const LiS = styled.li`
  button {
    visibility: hidden;
  }

  &:hover {
    button {
      visibility: visible;
    }
  }
`;
