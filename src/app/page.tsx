/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import React from 'react';

import SectionProducts from './home/SectionProducts';
// import { PageContext } from './layout';

const page = () => {
  // const cart = React.useContext(PageContext);
  // console.log(cart);
  return (
    <div>
      <div className="mb-32">
        <SectionProducts />
      </div>
    </div>
  );
};

export default page;
