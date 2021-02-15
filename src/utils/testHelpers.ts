import { ITechniqe } from '../store/techniques/types';

export const allTeches: ITechniqe['all'] = [
  {
    title: 'Кейс-технологія',
    id: 1110,
    methods: [
      {
        title: 'Дивуй!',
        id: 1110,
        url: '',
      },
      {
        title: 'Модель «майбутніх знань»',
        id: 1,
        url: '',
      },
      {
        title: 'Ситуаційне завдання',
        id: 2,
        url: '',
      },
      {
        title: 'Створи паспорт',
        id: 3,
        url: '',
      },
      {
        title: 'Філософи',
        id: 4,
        url: '',
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
        url: '',
      },
      {
        title: 'Модель «майбутніх знань» 2',
        id: 11,
        url: '',
      },
      {
        title: 'Ситуаційне завдання 2',
        id: 12,
        url: '',
      },
      {
        title: 'Створи паспорт 2',
        id: 13,
        url: '',
      },
      {
        title: 'Філософи 2',
        id: 14,
        url: '',
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
        url: '',
      },
      {
        title: 'Модель «майбутніх знань» 3',
        id: 21,
        url: '',
      },
      {
        title: 'Ситуаційне завдання 3',
        id: 22,
        url: '',
      },
      {
        title: 'Створи паспорт 3',
        id: 23,
        url: '',
      },
      {
        title: 'Філософи 3',
        id: 24,
        url: '',
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
      url: '',
    };
  }
}
