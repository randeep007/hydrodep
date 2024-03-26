import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer/Footer'

const error = () => {
    return (
        <>
            <Navbar />
            <div className='error container d-flex flex-column justify-content-center align-items-center mt-3' >
                <p style={{ fontSize: '6rem' }}>404</p>
                <h1>
                    Page Not Found
                </h1>
                <p>The page you're looking for might be renamed, removed , <br />
                    <p className='text-center'>or might naver exist on this Website</p>
                </p>
                <div className='d-flex'>
                    <a href="/">
                        <button id="flash-button" className='pt-1 pl-2 pr-2 pb-1'>Home</button>
                    </a>
                    <a href="/products/all">
                        <button id="flash-button" className='pt-1 pl-2 pr-2 pb-1 ml-3'>All Products</button>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default error
