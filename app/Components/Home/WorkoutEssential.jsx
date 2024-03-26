import React, { useState } from 'react';
import fat1 from '../../img/fat1.png';
import fat2 from '../../img/fat2.png';
import fat3 from '../../img/fat3.png';
import fat4 from '../../img/fat4.png';
import fat5 from '../../img/fat5.png';
import fat6 from '../../img/fat6.png';
import { Link } from '@remix-run/react';
import { Oval } from 'react-loader-spinner';

export const meta = () => {
    return [
        { title: 'BuildMyBody | Popular in Workout Essentials' },
        {
            name: 'description',
            content: 'Explore popular workout essentials on BuildMyBody. Find top-quality fitness supplements for your workout routine. Shop now for the best deals.',
        },
        { name: 'keywords', content: 'BuildMyBody, Workout Essentials, Fitness Supplements, Fat Burner, CLA, Black Mamba, Enhanced Athlete, XPEL, Myodrol HSP' },
    ];
};
const WheyEssential = () => {
    const tiles = [
        { url: 'products/fat-burner', image: fat1 },
        { url: 'products/cla', image: fat2 },
        { url: 'product/innovative-laboratories-black-mamba', image: fat3 },
        { url: 'products/enhanced-athlete', image: fat4 },
        { url: 'product/mhp-xpel', image: fat5 },
        { url: 'product/myogenetix-myodrol-hsp', image: fat6 },
    ];
    const [loading, setLoading] = useState(false); // State variable to track loading state

    // Function to handle loading state
    const handleLoading = () => {
        setLoading(true);
        // You can perform additional actions here, such as fetching data
    };

    return (
        <>
            {loading && (
                <div className="overlay">
                    <Oval
                        visible={true}
                        height={80}
                        width={80}
                        color="#4fa94d"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            )}
            <section id='popular' className='pb-5'>
                <div className="container" id='cgap'>
                    <div className="d-flex justify-content-center mb-5" style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <h1 className="font-weight-bolder custom-heading">
                            <em>Popular in Workout Essentials</em>
                        </h1>
                        <hr className="h1-hr" />
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {tiles.map((tile) => (
                            <Link to={tile.url} className="col-12" key={tile.url} onClick={handleLoading}>
                                <div className="essential-card mt-3">
                                    <p className="text-center mt-4">
                                        <img src={tile.image} className="popular-img" alt={`Image for ${tile.url}`} style={{ width: '100%' }} />
                                    </p>
                                    <div className="text-center" id='popular-txt'>
                                        <span style={{ fontWeight: 'bold' }} className="mt-2 text-dark">
                                            {tile.title}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};



export default WheyEssential;
