const defaultState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    progress: 54,
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
    progress: 64,
  },
  {
    id: 3,
    title: 'Capital In The Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
    progress: 78,
  },
];

export default function books(state = defaultState) {
  return state;
}
