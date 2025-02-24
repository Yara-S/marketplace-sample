/* eslint-disable unused-imports/no-unused-vars */
// import type { FC } from 'react';
import React from 'react';

import type { ProductType } from '@/data/types';

import MainNav from './MainNav';
import TopNav from './TopNav';

const Header = ({
  cart,
  deleteItemCart,
}: {
  cart: ProductType[];
  deleteItemCart: any;
}) => {
  return (
    <div className="nc-Header sticky inset-x-0 top-0 z-50 w-full border-b border-neutral-300 bg-white">
      <TopNav />
      <MainNav cart={cart} deleteItemCart={deleteItemCart} />
    </div>
  );
};

export default Header;
