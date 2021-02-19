import { ITechniqe } from '../store/techniques/types';

export const allTeches: ITechniqe['all'] = [];

export class Tech {
  all: typeof allTeches;
  techId: number;

  constructor(data: typeof allTeches = allTeches) {
    this.all = data;
    this.techId = 0;
  }

  setTechId(id: number) {
    this.techId = id;
  }

  get tech(): typeof allTeches[0] {
    const all = this.all;
    const id = this.techId;

    return {
      id: all[id].id,
      title: all[id].title,
      methods: [],
    };
  }

  getMethod(methodPos: number = 0): typeof allTeches[0]['methods'][0] {
    const all = this.all;
    const id = this.techId;

    return {
      id: all[id].methods[methodPos].id,
      title: all[id].methods[methodPos].title,
      url: '',
      isdemo: true,
    };
  }
}
