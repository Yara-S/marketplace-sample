/* eslint-disable unused-imports/no-unused-vars */
// import type { FC } from 'react';
import React from 'react';

import type { ProductType } from '@/data/types';
import Logo from '@/shared/Logo/Logo';

import CartSideBar from '../CartSideBar';
import MenuBar from './MenuBar';

const MainNav = ({
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
    <div className="container flex items-center justify-between py-4">
      <div className="flex-1 lg:hidden">
        <MenuBar />
      </div>
      <div className="flex items-center gap-5 lg:basis-3/5">
        <Logo />
      </div>

      <div className="flex flex-1 items-center justify-end gap-5">
        <div className="flex items-center divide-x divide-neutral-300">
          <CartSideBar
            cart={cart}
            deleteItemCart={deleteItemCart}
            openBar={openBar}
            closeBar={closeBar}
            isVisable={isVisable}
            setCart={setCart}
          />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
