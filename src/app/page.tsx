/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import React from 'react';

import SectionProducts from './home/SectionProducts';

const page = () => {
  return (
    <div>
      <div className="mb-32">
        <SectionProducts />
      </div>
    </div>
  );
};

export default page;
