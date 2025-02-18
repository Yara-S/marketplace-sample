import React from 'react';

import ProductCard from '@/components/ProductCard';
import { productsSection, shoes } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

const SectionProducts = () => {
  return (
    <div className="container">
      <Heading isCenter isMain desc={productsSection.description}>
        {productsSection.heading}
      </Heading>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {shoes.map((shoe) => (
          <ProductCard
            key={shoe.shoeName}
            product={shoe}
            className="border-neutral-300"
          />
        ))}
      </div>
    </div>
  );
};

export default SectionProducts;
