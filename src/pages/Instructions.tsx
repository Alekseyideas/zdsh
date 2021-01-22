import React from 'react';
import styled from 'styled-components';
import { Crumbs, ICrumb } from '../components/Crumbs';
import { ROUTE_PATH } from '../utils/consts';
import { MainWrapper } from '../wrappers/MainWrapper';

interface InstructionsProps {}

export const Instructions: React.FC<InstructionsProps> = () => {
  const crumbs: ICrumb[] = [
    {
      title: 'Головна',
      isLink: true,
      path: ROUTE_PATH.home,
      id: 1,
    },
    {
      title: 'Iнструкція',
      isLink: false,
      active: true,
      id: 2,
    },
  ];
  return (
    <MainWrapper>
      <div className="container">
        <Crumbs data={crumbs} />
        <WrapperTextS className="text-center pt-5">
          <h1>Iнструкція</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dignissimos odio rerum
            vitae. Ad consequatur natus voluptatem assumenda, rem itaque vero ipsam unde obcaecati
            earum aliquid, accusantium nesciunt. Alias, cumque?
          </p>
          <br />
          <br />
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dignissimos odio rerum
            vitae. Ad consequatur natus voluptatem assumenda, rem itaque vero ipsam unde obcaecati
            earum aliquid, accusantium nesciunt. Alias, cumque?
          </p>
          <br />
          <br />
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti fugit eos
            accusantium aut rerum rem itaque hic atque repellat, delectus enim. Itaque unde nihil
            eligendi sint aliquid fugiat debitis repellendus magnam laudantium? Beatae nisi rerum
            dolor qui fugiat eum molestiae consectetur accusamus iusto fuga in ratione possimus
            quia, nam facilis. Ducimus praesentium quam numquam quibusdam commodi eveniet aperiam
            tenetur earum rerum dolorem soluta eius quaerat repellendus quos consequatur inventore
            voluptatibus cum, suscipit reiciendis asperiores vel impedit. Vero in, dolorem facere ad
            corporis consequatur voluptate eius ab possimus beatae ea ducimus deserunt natus
            mollitia placeat aut inventore fugiat. Quo dignissimos pariatur quisquam? Ipsa dolorem
            incidunt expedita quis quaerat eligendi nisi fuga ab explicabo cum nobis odit rerum,
            mollitia assumenda libero tempora possimus, nemo quia. Dolorem modi perferendis
            accusantium corrupti perspiciatis? Perferendis quam ducimus temporibus sapiente
            accusamus incidunt nulla aspernatur facilis quidem dignissimos? Dignissimos, incidunt
            tenetur! Cum beatae, quia fugit inventore iusto similique incidunt accusamus tempora
            harum, fugiat sequi soluta? Consequuntur voluptates corporis, eum commodi repellat
            deleniti natus, neque, nisi quae vero error ad deserunt ipsam amet. Ipsum, dolorum
            consequuntur nostrum alias maiores asperiores ducimus obcaecati autem eius quo, cumque
            excepturi corrupti maxime. Qui architecto nesciunt natus nostrum sunt doloremque non!
          </p>
        </WrapperTextS>
      </div>
    </MainWrapper>
  );
};

const WrapperTextS = styled.div`
  max-width: 900px;
  margin: auto;
`;
