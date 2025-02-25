/* eslint-disable unused-imports/no-unused-vars */
// import type { FC } from 'react';
import React from 'react';

import type { ProductType } from '@/data/types';

import MainNav from './MainNav';
import TopNav from './TopNav';

const Header = ({
  cart,
  deleteItemCart,
  openBar,
  closeBar,
  isVisable,
  setCart,
}: {
  cart: ProductType[];
  deleteItemCart: any;
  openBar: () => void;
  closeBar: () => void;
  isVisable: boolean;
  setCart: React.Dispatch<React.SetStateAction<ProductType[]>>;
}) => {
  return (
    <div className="nc-Header sticky inset-x-0 top-0 z-50 w-full border-b border-neutral-300 bg-white">
      <TopNav />
      <MainNav
        cart={cart}
        deleteItemCart={deleteItemCart}
        openBar={openBar}
        closeBar={closeBar}
        isVisable={isVisable}
        setCart={setCart}
      />
    </div>
  );
};

export default Header;
