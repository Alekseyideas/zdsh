import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppState } from '../store/applicationState';
import { addToMyR, removeFromMyR } from '../store/techniques/actions';
import { IMethod } from '../store/techniques/types';
import { MAIN_BTNS, ROUTE_PATH } from '../utils/consts';
import { isInMy } from '../utils/isMy';
import { Button, FontIcon } from './ui';
import { ButtonLink } from './ui/Buttons';

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
  const { Techniques, User } = useSelector((store: AppState) => store);
  const dispatch = useDispatch();
  const remove = (id: IMethod['id']) => dispatch(removeFromMyR({ id }));
  const add = (id: IMethod['id']) => dispatch(addToMyR({ id }));

  const renderRemoveBtn = (id: number) => {
    if (!isMy) return null;
    return (
      <Button
        title={<FontIcon name={MAIN_BTNS[3].icon} />}
        onClick={() => remove(id)}
        isOutline
        type="secondary"
        tooltip={MAIN_BTNS[3].title}
      />
    );
  };
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
                  {!User.data.isDemo || (User.data.isDemo && itm.isdemo) ? (
                    <Link
                      to={`${isMy ? ROUTE_PATH.myCards : ROUTE_PATH.techniques}/${itm.id}`}
                      className="d-block"
                    >
                      {itm.title}
                    </Link>
                  ) : (
                    <span className="d-block">{itm.title}</span>
                  )}

                  <div className="d-flex align-items-center">
                    {itm.url && (!User.data.isDemo || (User.data.isDemo && itm.isdemo)) ? (
                      <>
                        <ButtonLink
                          title={<FontIcon name={MAIN_BTNS[0].icon} />}
                          href={itm.url}
                          isOutline
                          classes="me-2"
                          type="secondary"
                          tooltip={MAIN_BTNS[0].title}
                        />
                        <ButtonLink
                          title={<FontIcon name={MAIN_BTNS[1].icon} />}
                          href={itm.url}
                          isOutline
                          classes="me-2"
                          type="secondary"
                          tooltip={MAIN_BTNS[1].title}
                        />
                      </>
                    ) : null}

                    {!User.data.isDemo || (User.data.isDemo && itm.isdemo) ? (
                      isInMy(itm.id, !!isMy, Techniques.data.my) ? (
                        renderRemoveBtn(itm.id)
                      ) : (
                        <Button
                          title={<FontIcon name={MAIN_BTNS[2].icon} />}
                          onClick={() => add(itm.id)}
                          isOutline
                          type="secondary"
                          tooltip={MAIN_BTNS[2].title}
                        />
                      )
                    ) : null}
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
  a.btn,
  button {
    visibility: hidden;
  }
  span {
    color: rgba(0, 0, 0, 0.3);
    padding: 7px 0;
  }
  &:hover {
    a.btn,
    button {
      visibility: visible;
    }
  }
`;
