import React from 'react';

import { footerData } from '@/data/content';

import Logo from '../Logo/Logo';
import Subscribe from './Subscribe';

const Footer: React.FC = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <div className="container grid gap-10 py-16 lg:grid-cols-1 lg:gap-0">
          <div className="space-y-10 md:pr-20">
            <Logo className="block" />
            <p className="">{footerData.description}</p>
            <Subscribe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
