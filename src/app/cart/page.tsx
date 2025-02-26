/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdStar } from 'react-icons/md';

import type { ProductType } from '@/data/types';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import InputNumber from '@/shared/InputNumber/InputNumber';

import { PageContext } from '../layout';

const renderProduct = (
  item: ProductType,
  handleItemCountUpdate: (item: ProductType, value: any) => void,
  handleDeleteItem: (chosenItem: ProductType) => void,
) => {
  const { shoeName, coverImage, currentPrice, slug, rating, shoeCategory } =
    item;

  return (
    <div key={shoeName} className="flex py-5 last:pb-0">
      <div className="relative size-24 shrink-0 overflow-hidden rounded-xl md:size-40">
        <Image
          fill
          src={coverImage}
          alt={shoeName}
          className="size-full object-contain object-center"
        />
        <Link className="absolute inset-0" href={`/products/${slug}`} />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between">
        <div>
          <div className="flex justify-between ">
            <div>
              <h3 className="font-medium md:text-2xl ">
                <Link href={`/products/${slug}`}>{shoeName}</Link>
              </h3>
              <span className="my-1 text-sm text-neutral-500">
                {shoeCategory}
              </span>
              <div className="flex items-center gap-1">
                <MdStar className="text-yellow-400" />
                <span className="text-sm">{rating}</span>
              </div>
            </div>
            <span className="font-medium md:text-xl">${currentPrice}</span>
          </div>
        </div>
        <div className="flex w-full items-end justify-between text-sm">
          <div className="flex items-center gap-3">
            <ButtonCircle3 onClick={() => handleDeleteItem(item)}>
              <AiOutlineDelete className="text-2xl" />
            </ButtonCircle3>
          </div>
          <div>
            <InputNumber
              defaultValue={item.count}
              onChange={(x) => handleItemCountUpdate(item, x)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  const cartContext = React.useContext(PageContext);
  if (cartContext === undefined) {
    throw new Error('Cart not defined');
  }
  const { setCart, cart } = cartContext;
  const [total, setTotal] = React.useState(0);

  const sumSubtotal = () => {
    let startTotal = 0;
    for (const item of cart) {
      if (item.count === undefined) {
        item.count = 1;
      }
      startTotal += item.currentPrice * item.count;
    }
    setTotal(startTotal);
    return startTotal;
  };

  React.useEffect(() => {
    setTotal(sumSubtotal());
  }, [sumSubtotal]);

  const handleItemCountUpdate = (item: ProductType, value: any) => {
    const loc = cart.indexOf(item);
    if (cart[loc] !== undefined) {
      cart[loc].count = value;
      setCart(cart);
      sumSubtotal();
    }
  };

  const handleDeleteItem = (chosenItem: ProductType) => {
    setCart(cart.filter((product) => product.slug !== chosenItem.slug));
    sumSubtotal();
  };
  return (
    <div className="nc-CartPage">
      <main className="container py-16 lg:pb-28 lg:pt-20 ">
        <div className="mb-14">
          <h2 className="block text-2xl font-medium sm:text-3xl lg:text-4xl">
            Your Cart
          </h2>
        </div>

        <hr className="my-10 border-neutral-300 xl:my-12" />

        <div className="flex flex-col lg:flex-row">
          <div className="w-full divide-y divide-neutral-300 lg:w-3/5 xl:w-[55%]">
            {cart.map((item) =>
              renderProduct(item, handleItemCountUpdate, handleDeleteItem),
            )}
          </div>
          <div className="my-10 shrink-0 border-t border-neutral-300 lg:mx-10 lg:my-0 lg:border-l lg:border-t-0 xl:mx-16 2xl:mx-20" />
          <div className="flex-1">
            <div className="sticky top-28">
              <h3 className="text-2xl font-semibold">Summary</h3>
              <div className="mt-7 divide-y divide-neutral-300 text-sm">
                <div className="flex justify-between pb-4">
                  <span>Subtotal</span>
                  <span className="font-semibold">${total}</span>
                </div>
                <div className="flex justify-between py-4">
                  <span>Estimated Delivery & Handling</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between pt-4 text-base font-semibold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
              <ButtonPrimary className="mt-8 w-full">
                Checkout Now
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
