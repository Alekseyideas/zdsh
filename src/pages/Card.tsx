import React from 'react';
import styled from 'styled-components';
import { Button, FontIcon } from '../components/ui';
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
  const renderBtnText = (btnNum: IBtnNum) => (
    <>
      <FontIcon name={MAIN_BTNS[btnNum].icon} />
      <span className="ms-2">{MAIN_BTNS[btnNum].title}</span>
    </>
  );

  return (
    <MainWrapper>
      <WrapperS className="container mt-5">
        <div style={{ maxWidth: '900px' }}>
          <h1>Дивуй !</h1>
          <h4>Як працює прийом</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit ea laboriosam rerum
            accusantium possimus at? Qui sed consectetur nostrum? Suscipit aut cum voluptatibus
            recusandae nostrum ad reiciendis iste repellat? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Hic odit ea laboriosam rerum accusantium possimus at? Qui sed
            consectetur nostrum? Suscipit aut cum voluptatibus recusandae nostrum ad reiciendis iste
            repellat?
          </p>
          <h4>На якому етапі уроку застосовувати</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit ea laboriosam rerum
            accusantium possimus at? Qui sed consectetur nostrum? Suscipit aut cum voluptatibus
            recusandae nostrum ad reiciendis iste repellat?
          </p>
          <h4>Як застосовувати</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate asperiores
            repudiandae earum distinctio sint. Porro, sunt nihil cum doloremque nostrum fugiat ea
            quaerat non maxime nesciunt doloribus sapiente temporibus quas minima? Tempore dolorum
            quaerat doloribus totam perspiciatis laboriosam natus et. Inventore eum voluptas modi
            maxime, delectus nihil accusamus, facilis, corporis facere sunt eveniet quae nobis
            nostrum. Voluptas voluptates odit veniam expedita nam, excepturi doloremque voluptatem
            nisi autem exercitationem minus quidem veritatis iure. Asperiores facere nisi minus
            libero, modi illo iusto a sed corporis expedita aliquid quaerat error quam dolorem natus
            sapiente vel qui, inventore voluptate aut doloribus laudantium. Ex, voluptatum.
          </p>
          <h4>Яку універсальну навчальну дію формує</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis earum magnam
            inventore illum necessitatibus quos aliquam cumque quidem odit et. Incidunt eos
            recusandae, inventore assumenda perspiciatis labore iure magni hic corrupti, nisi
            architecto dolores ad necessitatibus velit doloremque ab quia quae perferendis
            aspernatur eius? Error officia beatae totam asperiores voluptatum.
          </p>
          <h4>Як формувати універсальну навчальну дію</h4>
          <ul>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, ut.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, at velit!</li>
          </ul>
          <h4>Що робить учитель</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat fugit architecto
            maiores. Harum quo corrupti aliquid sapiente cumque. Doloribus.
          </p>
          <h4>Що роблять учні</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum labore, rem,
            impedit adipisci eum fuga corporis officiis sit perspiciatis magnam quasi ipsum.
            Expedita corrupti odio et voluptatum accusamus dolore. Tenetur laboriosam, officiis eius
            voluptatum repellat hic optio velit voluptates esse libero accusamus rem odit soluta
            inventore nostrum aperiam, excepturi earum atque quis a, harum aliquid dignissimos sunt
            pariatur? Blanditiis quibusdam rerum tenetur voluptatem voluptate exercitationem optio
            vero, laboriosam dignissimos architecto beatae maiores similique rem voluptatibus eius
            fuga.
          </p>
        </div>
        <div className="d-flex mt-5">
          <Button title={renderBtnText(IBtnNum.download)} onClick={() => null} classes="me-3" />
          <Button title={renderBtnText(IBtnNum.print)} onClick={() => null} classes="me-3" />
          <Button title={renderBtnText(IBtnNum.clone)} onClick={() => null} classes="me-3" />
          {/* <Button title={renderBtnText(3)} onClick={() => null} classes="me-3" /> */}
        </div>
      </WrapperS>
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
