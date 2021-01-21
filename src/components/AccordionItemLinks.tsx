import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IMethod } from '../store/techniques/types';
import { MAIN_BTNS, ROUTE_PATH } from '../utils/consts';
import { Button, FontIcon } from './ui';

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
                      title={<FontIcon name={MAIN_BTNS[0].icon} />}
                      onClick={() => null}
                      isOutline
                      classes="me-2"
                      type="secondary"
                      tooltip={MAIN_BTNS[0].title}
                    />
                    <Button
                      title={<FontIcon name={MAIN_BTNS[1].icon} />}
                      onClick={() => null}
                      isOutline
                      classes="me-2"
                      type="secondary"
                      tooltip={MAIN_BTNS[1].title}
                    />
                    {isMy ? (
                      <Button
                        title={<FontIcon name={MAIN_BTNS[2].icon} />}
                        onClick={() => null}
                        isOutline
                        type="secondary"
                        tooltip={MAIN_BTNS[2].title}
                      />
                    ) : (
                      <Button
                        title={<FontIcon name={MAIN_BTNS[3].icon} />}
                        onClick={() => null}
                        isOutline
                        type="secondary"
                        tooltip={MAIN_BTNS[3].title}
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
