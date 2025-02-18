import React from 'react';

import Logo from '@/shared/Logo/Logo';

import CartSideBar from '../CartSideBar';
import MenuBar from './MenuBar';

const MainNav = () => {
  return (
    <div className="container flex items-center justify-between py-4">
      <div className="flex-1 lg:hidden">
        <MenuBar />
      </div>
      <div className="flex items-center gap-5 lg:basis-[60%]">
        <Logo />
      </div>

      <div className="flex flex-1 items-center justify-end gap-5">
        <div className="flex items-center divide-x divide-neutral-300">
          <CartSideBar />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
