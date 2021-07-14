import uuid from 'react-uuid';

const reviews = [
  {
    comment: 'Ullamco sunt occaecat voluptate magna.',
    date: '2021-09-08T14:13:56.569Z',
    id: uuid(),
    rating: 3,
    user: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: uuid(),
      isPro: false,
      name: 'John Doe',
    },
  },
  {
    comment: 'Labore et nulla laboris eu aliquip eiusmod veniam.',
    date: '2020-06-08T14:12:56.569Z',
    id: uuid(),
    rating: 2,
    user: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: uuid(),
      isPro: false,
      name: 'Leeroy Jenkins',
    },
  },
  {
    comment: 'Incididunt ad magna reprehenderit irure esse reprehenderit reprehenderit nulla enim nulla non veniam.',
    date: '2020-10-08T14:13:56.569Z',
    id: uuid(),
    rating: 5,
    user: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: uuid(),
      isPro: true,
      name: 'Jon',
    },
  },
  {
    comment: 'Cillum aute in velit excepteur dolore nisi labore id quis.',
    date: '2019-07-08T14:13:56.569Z',
    id: uuid(),
    rating: 4,
    user: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      id: uuid(),
      isPro: false,
      name: 'Max',
    },
  },
];

export default reviews;
