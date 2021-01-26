import { ITechniqe } from '../store/techniques/types';

export const allTeches: ITechniqe['all'] = [
  {
    title: 'Кейс-технологія',
    id: 1110,
    methods: [
      {
        title: 'Дивуй!',
        id: 1110,
      },
      {
        title: 'Модель «майбутніх знань»',
        id: 1,
      },
      {
        title: 'Ситуаційне завдання',
        id: 2,
      },
      {
        title: 'Створи паспорт',
        id: 3,
      },
      {
        title: 'Філософи',
        id: 4,
      },
    ],
  },
  {
    title: 'Ігрова технологія',
    id: 1,
    methods: [
      {
        title: 'Дивуй! 2',
        id: 10,
      },
      {
        title: 'Модель «майбутніх знань» 2',
        id: 11,
      },
      {
        title: 'Ситуаційне завдання 2',
        id: 12,
      },
      {
        title: 'Створи паспорт 2',
        id: 13,
      },
      {
        title: 'Філософи 2',
        id: 14,
      },
    ],
  },
  {
    title: 'Технологія творчих майстерень 3',
    id: 2,
    methods: [
      {
        title: 'Дивуй!',
        id: 20,
      },
      {
        title: 'Модель «майбутніх знань» 3',
        id: 21,
      },
      {
        title: 'Ситуаційне завдання 3',
        id: 22,
      },
      {
        title: 'Створи паспорт 3',
        id: 23,
      },
      {
        title: 'Філософи 3',
        id: 24,
      },
    ],
  },
];

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
    };
  }
}
