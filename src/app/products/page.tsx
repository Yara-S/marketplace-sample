import React from 'react';

import ProductCard from '@/components/ProductCard';
import { shoes } from '@/data/content';

const page = () => {
  return (
    <div className="">
      <div className="container relative flex flex-col lg:flex-row" id="body">
        <div className="mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0" />
        <div className="relative flex-1">
          <div className="grid flex-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 ">
            {shoes.map((item) => (
              <ProductCard showPrevPrice product={item} key={item.slug} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
