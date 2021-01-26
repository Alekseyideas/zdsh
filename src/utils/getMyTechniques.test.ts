import { getMyTechniques } from './getMyTechniques';
import { allTeches, Tech } from './testHelpers';

test('get empty techniques', () => {
  const techniques = getMyTechniques([], []);
  expect(techniques).toEqual([]);
});

test('get empty my techniqe', () => {
  const myTechIds: number[] = [];
  const techniques = getMyTechniques(allTeches, myTechIds);
  expect(techniques).toEqual([]);
});
test('get first techniqe', () => {
  const NewTech = new Tech();
  const method_1 = NewTech.getMethod();
  const myTechIds = [method_1.id];
  const { tech } = NewTech;
  tech.methods = [method_1];

  const techniques = getMyTechniques(allTeches, myTechIds);

  expect(techniques).toEqual([tech]);
});

test('get several techniques', () => {
  const NewTech = new Tech();
  const NewTech_2 = new Tech();

  NewTech_2.setTechId(1);

  const method_1 = NewTech.getMethod();

  const method_2_2 = NewTech_2.getMethod(1);

  const myTechIds = [method_1.id, method_2_2.id];

  const techniques = getMyTechniques(allTeches, myTechIds);

  const { tech } = NewTech;
  const { tech: tech_2 } = NewTech_2;

  tech.methods = [method_1];
  tech_2.methods = [method_2_2];

  expect(techniques).toEqual([tech, tech_2]);
});

test('get several methods in techniques', () => {
  const NewTech = new Tech();

  const method_1 = NewTech.getMethod();
  const method_2 = NewTech.getMethod(1);

  const myTechIds = [method_1.id, method_2.id];

  const techniques = getMyTechniques(allTeches, myTechIds);

  const { tech } = NewTech;

  tech.methods = [method_1, method_2];

  expect(techniques).toEqual([tech]);
});

test('get several methods in several techniques', () => {
  const NewTech = new Tech();
  const NewTech_2 = new Tech();
  const NewTech_3 = new Tech();

  NewTech_2.setTechId(1);
  NewTech_3.setTechId(2);

  const method_1 = NewTech.getMethod();
  const method_2 = NewTech.getMethod(1);

  const method_2_1 = NewTech_2.getMethod(0);
  const method_2_2 = NewTech_2.getMethod(4);

  const method_3_1 = NewTech_3.getMethod(2);

  const myTechIds = [method_1.id, method_2.id, method_2_1.id, method_2_2.id, method_3_1.id];

  const techniques = getMyTechniques(allTeches, myTechIds);

  const { tech } = NewTech;
  const { tech: tech2 } = NewTech_2;
  const { tech: tech3 } = NewTech_3;

  tech.methods = [method_1, method_2];
  tech2.methods = [method_2_1, method_2_2];
  tech3.methods = [method_3_1];

  expect(techniques).toEqual([tech, tech2, tech3]);
});
