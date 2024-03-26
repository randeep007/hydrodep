import React from 'react';
import Slider from 'react-slick';
import { NavLink } from '@remix-run/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pre from '../../img/pre.png';
const Offers = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4, // Show 3 slides on large screens
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992, // Medium screens
                settings: {
                    slidesToShow: 3, // Show 2 slides on medium screens
                },
            },
            {
                breakpoint: 576, // Small screens
                settings: {
                    slidesToShow: 2, // Show 1 slide on small screens
                },
            },
        ],
    };
    const sliderItems = [
        {
            image: pre,
            text: 'BMB Shaker @ Rs. 199 | 76% Off | MRP: 849'
        },
        {
            image: pre,
            text: 'BMB High Protein Muesli 400g @ Rs. 285'
        },
        {
            image: pre,
            text: 'Chocolate Peanut Butter 340 g @ Rs. 149 Only'
        },
        {
            image: pre,
            text: 'BMB Gym Bag @ Rs. 299 | 83% Off | MRP: 1199'
        },
        {
            image: pre,
            text: 'Fish Oil 30 Caps @ Rs 279 | 30% Off | MRP: 399'
        },
        {
            image: pre,
            text: 'Ashwagandha 60 Tabs @ Rs. 259 | 35% Off | MRP: 399'
        },
        {
            image: pre,
            text: 'BMB-VITE 30 Tabs @ Rs 299 only | 21% Off | MRP: 379'
        },
        {
            image: pre,
            text: 'BMB High Protein Oats @ Rs. 79'
        }
    ];
    return (
        <section>
            <div className="container mb-2">

                <div className="text-center carousel">
                    <div
                        className="d-flex justify-content-center mb-5"
                        style={{ flexDirection: 'column', alignItems: 'center' }}
                    >
                        <h1 className="font-weight-bolder custom-heading">
                            <em>Popular in Sports Nutrition</em>
                        </h1>
                        <hr className="h1-hr" />
                    </div>
                    {/* <p>Best deals on individual products picked for you. Shop Now to grab the deals!</p> */}
                    <p> Apply These Offers In The Checkout --------&#62;</p>
                </div>
                <Slider {...settings}>
                    {/* Your components go here */}

                    {sliderItems.map((item, index) => (
                        <div className="slider-item p-2 text-dark" key={index}>
                            <img src={item.image} alt="" className="w-100" />
                            <div className="mt-1">
                                <p style={{ fontWeight: '600', fontSize: '.9rem' }}>{item.text}</p>
                                {/* Uncomment below lines if needed */}
                                {/* <p style={{ fontSize: '.9rem' }}>Upto 40% off on Enhanced Athlete Products.</p> */}
                                {/* <button id='flash-button' className='w-100 p-1'>Shop Now</button> */}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Offers;