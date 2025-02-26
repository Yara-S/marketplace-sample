/* eslint-disable react/no-unused-prop-types */
import { pathOr } from 'ramda';
import React from 'react';

import { shoes } from '@/data/content';
import type { ProductType } from '@/data/types';

import SectionProductHeader from './SectionProductHeader';
import SectionProductInfo from './SectionProductInfo';

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getProductData = async (id: string) => {
  const filteredDestination = shoes.find((item) => item.slug === id);
  return filteredDestination;
};

const SingleProductPage = async (props: Props) => {
  const selectedProduct = await getProductData(props.params.productId);

  const selectedCartItem: ProductType = selectedProduct as ProductType;

  return (
    <div className="container">
      <div className="mb-20">
        <SectionProductHeader
          shots={pathOr([], ['shots'], selectedProduct)}
          shoeName={pathOr('', ['shoeName'], selectedProduct)}
          prevPrice={pathOr(0, ['previousPrice'], selectedProduct)}
          currentPrice={pathOr(0, ['currentPrice'], selectedProduct)}
          rating={pathOr(0, ['rating'], selectedProduct)}
          pieces_available={pathOr(0, ['pieces_available'], selectedProduct)}
          cartItem={selectedCartItem}
        />
      </div>

      <div className="mb-28">
        <SectionProductInfo
          overview={pathOr('', ['overview'], selectedProduct)}
          shipment_details={pathOr([], ['shipment_details'], selectedProduct)}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
