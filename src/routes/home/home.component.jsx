import { Outlet } from 'react-router-dom';

import Categories from '../../components/categories/categories.component';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl:
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGF0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl:
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl:
      'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl:
      'https://images.unsplash.com/photo-1656019674844-3040aba0350b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl:
      'https://images.unsplash.com/photo-1571153041701-728931a0ff63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  },
];

const Home = () => {
  return (
    <div>
      <Categories categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
