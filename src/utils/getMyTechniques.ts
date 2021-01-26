import { ITechniqe } from '../store/techniques/types';

export function getMyTechniques(all: ITechniqe['all'], my: ITechniqe['my']) {
  let data: ITechniqe['all'] = [];

  if (!my[0] || !all[0]) return [];

  all.forEach((tech) => {
    const newTech = { ...tech };
    let ret = false;

    newTech.methods = newTech.methods.filter((meth) => {
      if (my.includes(meth.id)) {
        ret = true;
      }
      return my.includes(meth.id);
    });

    let inData = false;

    if (ret && !inData) {
      data.push(newTech);
    }
  });

  return data;
}
