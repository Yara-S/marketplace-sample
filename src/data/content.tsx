import { BsBoxFill } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { FiBox } from 'react-icons/fi';
import { IoChatboxOutline } from 'react-icons/io5';
import { MdOutlineCameraAlt } from 'react-icons/md';
import { PiPercentFill } from 'react-icons/pi';

import type { NavItemType } from '@/components/NavItem';
import airForce1 from '@/images/airForce1.webp';
import blackLebron from '@/images/blackLebron.webp';
import brownsb from '@/images/brownsb.webp';
import brsb from '@/images/brsb.webp';
import dunklow from '@/images/dunklow.webp';
import shot1 from '@/images/shots/shot1.webp';
import shot2 from '@/images/shots/shot2.webp';
import shot3 from '@/images/shots/shot3.jpeg';
import shot4 from '@/images/shots/shot4.jpeg';
import shot5 from '@/images/shots/shot5.webp';
import shot6 from '@/images/shots/shot6.jpeg';
import shot7 from '@/images/shots/shot7.webp';

export const topNavLinks: NavItemType[] = [
  {
    id: 'ee46t',
    name: 'Home',
    href: '/home',
  },
  {
    id: 'eexct',
    name: 'Products',
    href: '/products',
  },
  {
    id: 'h6ii8g',
    name: 'Contact',
    href: '/contact',
  },
  {
    id: 'h678ty',
    name: 'FAQ',
    href: '/faqs',
  },
];

export const shoes = [
  {
    slug: 'airForce1',
    shoeName: 'Air Force 1',
    coverImage: airForce1,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    shots: [airForce1, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'blackLebron',
    shoeName: 'Lebron Black',
    coverImage: blackLebron,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: true,
    shots: [blackLebron, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'brownsb',
    shoeName: 'SB Low Brown',
    coverImage: brownsb,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    shots: [brownsb, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'brsb',
    shoeName: 'BRSB',
    coverImage: brsb,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    shots: [brsb, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
  {
    slug: 'dunklow',
    shoeName: 'Dunk Low',
    coverImage: dunklow,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Men's shoes",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: false,
    shots: [dunklow, shot1, shot2, shot3, shot4, shot5, shot6, shot7],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: 'Discount',
        description: '> $100 Disc 10%',
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: 'Delivery Time',
        description: '6 - 12 Working days',
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: 'Package',
        description: 'Reagular Premium Box',
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: 'Estimated Arrival',
        description: '10 - 12 October 23',
      },
    ],
  },
];

export const productsSection = {
  heading: 'Shop Now, Look Good Later',
  description:
    'We have a buch of collections for you! Lets explore and find your dream shoes, make it happen',
};

export const footerData = {
  description: 'Shoes selling around the world.',
};

export const newsletter = {
  heading: "Don't wanna miss our offers?",
  description: 'Drop your email below and start receiving the best offers',
};

export const shoeSizes = [
  'EU36',
  'EU37',
  'EU38',
  'EU39',
  'EU40',
  'EU41',
  'EU42',
  'EU43',
  'EU44',
];

export const note =
  ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, est eum magnam doloremque, at adipisci debitis, similique dolores ipsa unde necessitatibus vero quibusdam nostrum numquam!';

export const contactSection = {
  heading: 'Contact us',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis quis phasellus eleifend tellus orci ornare.',
  directContactInfoHeader: {
    heading: 'Prefer to reach out directly?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh magna sit diam pharetra.',
  },
  directContactInfo: [
    {
      icon: <FiBox className="text-5xl" />,
      title: 'Sales',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit blandit velit semper aliquam.',
      contactLink: {
        href: 'mailto:sales@gmail.com',
        title: 'sales@gmail.com',
      },
    },
    {
      icon: <IoChatboxOutline className="text-5xl" />,
      title: 'Support',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit blandit velit semper aliquam.',
      contactLink: {
        href: 'mailto:support@gmail.com',
        title: 'support@gmail.com',
      },
    },
    {
      icon: <MdOutlineCameraAlt className="text-5xl" />,
      title: 'Influencers',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit blandit velit semper aliquam.',
      contactLink: {
        href: 'mailto:influencers@gmail.com',
        title: 'influencers@gmail.com',
      },
    },
  ],
};

export const faqsData = {
  heading: 'Frequently Asked Questions',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget adipiscing nibh nunc. Velit rhoncus arcu velesaed.',
  faqs: [
    {
      category: 'Shipping',
      data: [
        {
          question: 'How can I track my order?',
          answer:
            'You can track your order by logging into your account and checking the order status. Additionally, a tracking number will be provided in the shipping confirmation email.',
        },
        {
          question: 'What is the estimated delivery time for my order?',
          answer:
            'Delivery times vary based on your location. Typically, domestic orders take 3-5 business days, while international orders may take 7-14 business days.',
        },
        {
          question: 'Can I change my shipping address after placing an order?',
          answer:
            'Unfortunately, we cannot change the shipping address once the order is placed. Please double-check your information before completing the purchase.',
        },
        {
          question: 'Do you offer expedited shipping options?',
          answer:
            'Yes, we offer expedited shipping at an additional cost. You can choose your preferred shipping method during the checkout process.',
        },
        {
          question: 'What should I do if my order is delayed or lost?',
          answer:
            'If your order is significantly delayed or lost, please contact our customer support team, and we will investigate the issue.',
        },
      ],
    },
    {
      category: 'Products',
      data: [
        {
          question: 'How do I determine the right size for my sneakers?',
          answer:
            'Refer to our size chart available on the product page. It provides measurements and guidelines to help you choose the correct size.',
        },
        {
          question: 'Are your sneakers authentic?',
          answer:
            'Yes, we guarantee the authenticity of all our sneakers. We source them directly from authorized retailers and reputable suppliers.',
        },
        {
          question: "Can I return or exchange my sneakers if they don't fit?",
          answer:
            'Yes, we have a hassle-free return policy. You can return or exchange unworn sneakers within 30 days of receiving your order.',
        },
        {
          question: 'Are the colors of the sneakers accurate in the photos?',
          answer:
            'We strive to provide accurate color representation, but slight variations may occur due to monitor settings. Refer to product descriptions for additional details.',
        },
        {
          question: 'Do you restock sold-out sneakers?',
          answer:
            'We restock popular styles based on demand. You can sign up for notifications to be informed when a specific product is back in stock.',
        },
      ],
    },
    {
      category: 'Payments',
      data: [
        {
          question: 'What payment methods do you accept?',
          answer:
            'We accept major credit cards, PayPal, and other secure payment methods. You can view the full list during the checkout process.',
        },
        {
          question: 'How can I apply a discount code to my order?',
          answer:
            'Enter your discount code in the designated field during checkout. The discount will be applied to your total before payment.',
        },
        {
          question: 'Can I modify or cancel my order after payment?',
          answer:
            'Once an order is placed, it cannot be modified or canceled. Please review your order carefully before completing the purchase.',
        },
        {
          question: 'Is my payment information secure?',
          answer:
            'Yes, we use industry-standard encryption to secure your payment information. Your data is protected and never stored on our servers.',
        },
        {
          question: 'Do you offer gift cards?',
          answer:
            'Yes, we offer gift cards of various denominations. They make great presents for sneaker enthusiasts!',
        },
      ],
    },
    {
      category: 'Returns',
      data: [
        {
          question: 'How do I initiate a return or exchange?',
          answer:
            'Visit the "Returns & Exchanges" page on our website, follow the instructions, and submit a request. Our team will guide you through the process.',
        },
        {
          question: 'What is your return policy for defective products?',
          answer:
            'If you receive a defective product, please contact our customer support within 7 days of receiving the order. We will arrange a replacement or refund.',
        },
        {
          question: 'Are there any restocking fees for returns?',
          answer:
            'We do not charge restocking fees for returns. However, please review our return policy for specific details.',
        },
        {
          question: 'How long does it take to process a refund?',
          answer:
            'Refunds are typically processed within 5-7 business days after we receive the returned items and verify their condition.',
        },
        {
          question: "Can I return sneakers if I've worn them?",
          answer:
            'We only accept returns for unworn sneakers. Please try them on in a clean, indoor environment to ensure they are the right fit before wearing them outside.',
        },
      ],
    },
  ],
};
