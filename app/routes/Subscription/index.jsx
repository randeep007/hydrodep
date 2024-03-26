import React from 'react';
import Footer from '~/Components/Footer/Footer';
import Navbar from '~/Components/Navbar';
import protien from '../../img/protien.png';

const index = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h3 className="text-center mt-3" style={{ fontSize: '2rem' }}>
                            Subscription Plan
                        </h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="">
                            <img src={protien} className="card-img-top" alt="..." />
                            <div className="flex-column" style={{ border: '1px solid black' }}>
                                <p
                                    style={{ backgroundColor: '#2daff4', fontSize: '2rem' }}
                                    className=" text-light p-4"
                                >
                                    Basic{' '}
                                </p>
                            </div>
                            <div className="p-4" style={{ border: '1px solid black' }}>
                                <p>Features</p>
                                <p>&#x2022; Free Shaker</p>
                                <p>&#x2022; Free Shaker</p>
                                <p>&#x2022; Free Shaker</p>
                                <p>&#x2022; Free Shaker</p>
                            </div>

                            <div style={{ border: '1px solid black' }} className="p-4">
                                <p style={{ fontSize: '2rem', fontWeight: 'bold ' }}>Rs 299</p>
                                <p className="">Every 3 Days</p>
                                <p
                                    className="text-center"
                                    style={{ border: '1px solid #2daff4', borderRadius: '15px' }}
                                >
                                    Save 30%
                                </p>

                                <a
                                    href="#"
                                    className="btn btn-primary mt-3 text-light w-100"
                                    style={{ background: '#2daff4' }}
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="">
                            <img src={protien} className="card-img-top" alt="..." />
                            <div className="flex-column" style={{ border: '1px solid black' }}>
                                <p
                                    style={{ backgroundColor: '#F5A623', fontSize: '2rem' }}
                                    className=" text-light p-4"
                                >
                                    Plus{' '}
                                </p>
                            </div>
                            <div className="p-4" style={{ border: '1px solid black' }}>
                                <p>Features</p>
                                <p>&#x2022; Free Shaker</p>
                                <p>&#x2022; Free Shaker</p>
                                <p>&#x2022; Free Shaker</p>
                                <p>&#x2022; Free Shaker</p>
                            </div>

                            <div style={{ border: '1px solid black' }} className="p-4">
                                <p style={{ fontSize: '2rem', fontWeight: 'bold ' }}>Rs 299</p>
                                <p className="">Every 3 Days</p>
                                <p
                                    className="text-center"
                                    style={{ border: '1px solid #F5A623', borderRadius: '15px' }}
                                >
                                    Save 30%
                                </p>

                                <a
                                    href="#"
                                    className="btn btn-primary mt-3 text-light w-100"
                                    style={{ background: '#F5A623' }}
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="">
                            <img src={protien} className="card-img-top" alt="..." />
                            <div className="flex-column" style={{ border: '1px solid black' }}>
                                <p
                                    style={{ backgroundColor: '#8A74B9', fontSize: '2rem' }}
                                    className=" text-light p-4"
                                >
                                    Premium{' '}
                                </p>
                            </div>
                            <div className="p-4" style={{ border: '1px solid black' }}>
                                <p>Features</p>
                                <p>&#x2022; Free Shaker</p>
                                <p>&#x2022; Free Shaker</p>
                                <p>&#x2022; Free Shaker</p>
                                <p>&#x2022; Free Shaker</p>
                            </div>

                            <div style={{ border: '1px solid black' }} className="p-4">
                                <p style={{ fontSize: '2rem', fontWeight: 'bold ' }}>Rs 299</p>
                                <p className="">Every 3 Days</p>
                                <p
                                    className="text-center"
                                    style={{ border: '1px solid #8A74B9', borderRadius: '15px' }}
                                >
                                    Save 30%
                                </p>

                                <a
                                    href="#"
                                    className="btn btn-primary mt-3 text-light w-100"
                                    style={{ background: '#8A74B9' }}
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="">
                            <img src={protien} className="card-img-top" alt="..." />
                            <div className="flex-column" style={{ border: '1px solid black' }}>
                                <p
                                    style={{ backgroundColor: '#4CB992', fontSize: '2rem' }}
                                    className=" text-light p-4"
                                >
                                    Enterprise{' '}
                                </p>
                            </div>
                            <div className="p-4" style={{ border: '1px solid black' }}>
                                <p>Features</p>
                                <p>&#x2022; Free Shaker</p>
                                <p>&#x2022; Free Shaker</p>
                                <p>&#x2022; Free Shaker</p>
                                <p>&#x2022; Free Shaker</p>
                            </div>

                            <div style={{ border: '1px solid black' }} className="p-4">
                                <p style={{ fontSize: '2rem', fontWeight: 'bold ' }}>Rs 299</p>
                                <p className="">Every 3 Days</p>
                                <p
                                    className="text-center"
                                    style={{ border: '1px solid #4CB992', borderRadius: '15px' }}
                                >
                                    Save 30%
                                </p>

                                <a
                                    href="#"
                                    className="btn btn-primary mt-3 text-light w-100"
                                    style={{ background: '#4CB992' }}
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h3 className="text-center">Benefits</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default index;