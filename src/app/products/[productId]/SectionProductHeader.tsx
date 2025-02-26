'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { BsBag } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { MdStar } from 'react-icons/md';

import ImageShowCase from '@/components/ImageShowCase';
import type { ProductType } from '@/data/types';
import nike_profile from '@/images/nike_profile.jpg';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import Heading from '@/shared/Heading/Heading';

import { PageContext } from '../../layout';

interface SectionProductHeaderProps {
  shots: StaticImageData[];
  shoeName: string;
  prevPrice: number;
  currentPrice: number;
  rating: number;
  pieces_available: number;
  cartItem: ProductType;
}

const SectionProductHeader: FC<SectionProductHeaderProps> = ({
  shots,
  shoeName,
  prevPrice,
  currentPrice,
  rating,
  pieces_available,
  cartItem,
}) => {
  const cartContext = React.useContext(PageContext);
  if (cartContext === undefined) {
    throw new Error('Cart not defined');
  }
  const { addItemCart } = cartContext;

  const handleAddItemCart = (item: ProductType) => {
    addItemCart(item);
  };
  return (
    <div className="items-stretch justify-between space-y-10 lg:flex lg:space-y-0">
      <div className="basis-[50%]">
        <ImageShowCase shots={shots} />
      </div>

      <div className="basis-[45%]">
        <Heading className="mb-0" isMain title="new arrival!">
          {shoeName}
        </Heading>

        <div className="mb-10 flex items-center">
          <div className="flex items-center gap-1">
            <ButtonCircle3
              className="overflow-hidden border border-neutral-400"
              size="w-11 h-11"
            >
              <Image
                src={nike_profile}
                alt="nike_profile"
                className="size-full object-cover"
              />
            </ButtonCircle3>
          </div>
          <GoDotFill className="mx-3 text-neutral-500" />
          <div className="flex items-center gap-1">
            <MdStar className="text-yellow-400" />
            <p className="text-sm">{rating} </p>
          </div>
          <GoDotFill className="mx-3 text-neutral-500" />
          <p className="text-neutral-500">{`${pieces_available} items available`}</p>
        </div>

        <div className="mb-5 space-y-1">
          <p className="text-neutral-500 line-through">${prevPrice}</p>
          <h1 className="text-3xl font-medium">${currentPrice}</h1>
        </div>

        <div className="mt-5 flex items-center gap-5">
          <ButtonSecondary
            className="flex w-full items-center gap-1 border-2 border-primary text-primary"
            onClick={() => handleAddItemCart(cartItem)}
          >
            <BsBag /> Add to cart
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default SectionProductHeader;
