/* eslint-disable no-param-reassign */

'use client';

import '@/styles/global.css';

// import type { Metadata } from 'next';
import React, { Suspense, useState } from 'react';

import Header from '@/components/Header/Header';
import type { ProductType } from '@/data/types';
import airForce1 from '@/images/airForce1.webp';
import Footer from '@/shared/Footer/Footer';

import Loading from './loading';

const emptyCart: ProductType[] = [];
export const PageContext = React.createContext(emptyCart);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState([
    {
      slug: 'airForce1',
      shoeName: 'Air Force 1',
      coverImage: airForce1,
      currentPrice: 199,
      previousPrice: 250,
      shoeCategory: "Men's shoes",
      rating: 4.8,
      reviews: 56,
      pieces_sold: 600,
      justIn: false,
    },
  ]);

  const deleteItemCart = (item: ProductType) => {
    setCart(cart.filter((product) => product.slug !== item.slug));
  };
  return (
    <html lang="en">
      <body className="">
        <PageContext.Provider value={cart}>
          <Header cart={cart} deleteItemCart={deleteItemCart} />
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
