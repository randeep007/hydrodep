import pay1 from '../../img/pay1.jpg'
import pay2 from '../../img/pay2.jpg'
import pay3 from '../../img/pay3.jpg'
import pay4 from '../../img/pay4.jpg'
import pay5 from '../../img/pay5.jpg'
import pay6 from '../../img/pay6.jpg'

import { BsInstagram } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';
import { BiLogoLinkedin } from "react-icons/bi";
export const FooterConstants = {
    links: [
        {
            to: '/track',
            text: 'Track My Order',
        },
        {
            to: '/account/profile',
            text: 'Account',
        },
        {
            to: '/cart',
            text: 'Orders',
        },
        {
            to: '/blogs/news',
            text: 'Blog',
        },
    ],

    productLinks: [
        {
            to: '/products/sports-nutrition',
            text: 'Sports Nutrition',
        },
        {
            to: '/products/vitamin-supplements',
            text: 'Vitamins & Supplements',
        },
        {
            to: '/products/enhanced-athelte',
            text: 'Enhanced Athlete',
        },
    ],

    footerLinks: [
        {
            to: '/shippingPolicy',
            text: 'Shipping Policy',
        },
        {
            to: '/terms',
            text: 'Terms & Condition',
        },
        {
            to: '/returnpolicy',
            text: 'Return and Replacement Policy',
        },
        {
            to: '/privacypolicy',
            text: 'Privacy Policy',
        },
        {
            to: '/aboutus',
            text: 'About Us',
        },
    ],

    paymentMethods: [
        {
            src: pay1,
            alt: 'Visa',
        },
        {
            src: pay2,
            alt: 'MasterCard',
        },
        {
            src: pay3,
            alt: 'Paytm',
        },
        {
            src: pay4,
            alt: 'UPI',
        },
        {
            src: pay5,
            alt: 'FSSAI',
        },
        {
            src: pay6,
            alt: 'Secure Payment',
        },
    ],

    navLinks: [
        {
            to: '/',
            text: 'Home',
        },
        {
            to: '/products/all',
            text: 'Product',
        },
        {
            to: '/blogs/news',
            text: 'Blog',
        },
        {
            to: '/contact',
            text: 'Contact Us',
        },
    ],
    items: [
        {
            text: '100% Satisfaction',
            color: '#474544',
        },
        {
            text: 'Save 20% Every Time',
            color: '#474544',
        },
        {
            text: 'Fast Free Shipment',
            color: '#474544',
        },
        {
            text: 'Gift and Vouchers',
            color: '#474544',
        },
    ],
    socialIcons: [
        {
            link: 'https://www.instagram.com/buildmybody.in/',
            icon: <BsInstagram className="icons" size={25} />,
        },
        {
            link: 'https://www.linkedin.com/company/buildmybody™/about/',
            icon: <BiLogoLinkedin size={30} />,
        },
        {
            link: 'https://www.facebook.com/buildmybody.in',
            icon: <CiFacebook size={30} />,
        },
    ]



}