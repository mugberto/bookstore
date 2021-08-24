const defaultState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
  },
  {
    id: 3,
    title: 'Capital In The Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
];

export default function books(state = defaultState) {
  return state;
}
