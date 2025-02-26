import { shoes } from './content';
import type { ProductType } from './types';

export default async function DataHandler() {
  try {
    const data = await fetch('https://willfail.com');
    const shoesData: ProductType[] = await data.json();
    return shoesData;
  } catch (e) {
    console.log(e);
    return shoes;
  }
}
