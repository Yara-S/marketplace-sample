import React from 'react';

import ProductCard from '@/components/ProductCard';
import { productsSection } from '@/data/content';
import DataHandler from '@/data/handler';
import Heading from '@/shared/Heading/Heading';

export default async function SectionProducts() {
  const shoes = await DataHandler();
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
}

// export default SectionProducts;
