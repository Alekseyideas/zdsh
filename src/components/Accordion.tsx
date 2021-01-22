import React from 'react';
import { ITechniqe } from '../store/techniques/types';
import { AccordionItemLinks } from './AccordionItemLinks';

interface AccordionProps {
  data: ITechniqe[];
  isMy?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ data, isMy }) => {
  const [activeId, setActiveId] = React.useState(-1);

  const leftColItmsCount = Math.round(data.length / 2);
  // const rightColItmsCount = data.length - leftColItmsCount;

  const leftCol = data.slice(0, leftColItmsCount);
  const rightCol = data.slice(leftColItmsCount, data.length);

  const renderItms = (techniqies: ITechniqe[]) =>
    techniqies &&
    techniqies[0] &&
    techniqies.map((itm) => (
      <AccordionItemLinks
        onClick={() => (itm.id === activeId ? setActiveId(-1) : setActiveId(itm.id))}
        key={itm.id}
        title={itm.title}
        data={itm.methods}
        isShow={itm.id === activeId}
        isMy={isMy}
      />
    ));

  return (
    <div className="accordion" id="accordionExample">
      <div className="row">
        <div className="col-12 col-md-6">{renderItms(leftCol)}</div>
        <div className="col-12 col-md-6">{renderItms(rightCol)} </div>
      </div>
    </div>
  );
};
