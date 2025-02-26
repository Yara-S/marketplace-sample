import type { FC } from 'react';
import React from 'react';

import ProductInfoTab from './ProductInfoTab';

interface SectionProductInfoProps {
  overview: string;
  shipment_details: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
}

const SectionProductInfo: FC<SectionProductInfoProps> = ({
  overview,
  shipment_details,
}) => {
  return (
    <div className="grid gap-16 lg:grid-cols-2">
      <ProductInfoTab overview={overview} shipment_details={shipment_details} />
    </div>
  );
};

export default SectionProductInfo;
