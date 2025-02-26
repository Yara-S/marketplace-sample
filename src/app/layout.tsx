/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-param-reassign */

'use client';

import '@/styles/global.css';

// import type { Metadata } from 'next';
import React, { Suspense, useState } from 'react';

import Header from '@/components/Header/Header';
import type { ProductType } from '@/data/types';
// import airForce1 from '@/images/airForce1.webp';
import Footer from '@/shared/Footer/Footer';

import Loading from './loading';

const emptyCart: ProductType[] = [];

interface CartContextValue {
  addItemCart: (item: ProductType) => void;
  cart: ProductType[];
  setCart: React.Dispatch<React.SetStateAction<ProductType[]>>;
}
export const PageContext = React.createContext<CartContextValue | undefined>(
  undefined,
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState(emptyCart);
  const [isVisable, setIsVisable] = useState(false);

  const openBar = () => setIsVisable(true);
  const closeBar = () => setIsVisable(false);

  const deleteItemCart = (item: ProductType) => {
    setCart(cart.filter((product) => product.slug !== item.slug));
    closeBar();
    openBar();
  };

  const addItemCart = (item: ProductType) => {
    const selectedItemIndex = cart.indexOf(item);
    if (selectedItemIndex === -1) {
      item.count = 1;
      cart.push(item);
    } else {
      if (cart[selectedItemIndex]?.count === undefined) {
        throw new Error('No item count available');
      }
      cart[selectedItemIndex].count += 1;
    }
    setCart(cart);
    openBar();
  };

  return (
    <html lang="en">
      <body className="">
        <PageContext.Provider value={{ addItemCart, cart, setCart }}>
          <Header
            cart={cart}
            deleteItemCart={deleteItemCart}
            openBar={openBar}
            closeBar={closeBar}
            isVisable={isVisable}
            setCart={setCart}
          />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </PageContext.Provider>
      </body>
    </html>
  );
}

// Enable edge runtime, but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
