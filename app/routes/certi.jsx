import React, {useEffect, useState} from 'react';
import Try from './Try';
import data from './data';
import First from '../img/first.jpeg';

const Certi = () => {
  // Empty dependency array ensures this effect runs only once after mount
  const [selectedCategory, setSelectedCategory] = useState('Category1');
  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  useEffect(() => {
    const btn = document.getElementById('certi-btn');

    btn.addEventListener('click', (event) => {
      // 👇️ change background color
      document.body.style.backgroundColor = 'blue';

      // 👇️ optionally change text color
      // document.body.style.color = 'white';
    });

    // Clean up the event listener when the component unmounts
    return () => {
      btn.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 d-flex flex-column">
            {/* <button onClick={() => setSelectedCategory('All')}>All</button> */}
            <button
              onClick={() => setSelectedCategory('Category1')}
              className="p-2"
              id="certi-btn"
              style={{background: 'black', color: 'white', cursor: 'pointer'}}
            >
              <p className="text-left">Kar Enterprises</p>
            </button>
            <button
              onClick={() => setSelectedCategory('Category2')}
              className="p-2"
              style={{background: 'black', color: 'white', cursor: 'pointer'}}
            >
              <p className="text-left">MusclePro Nutrition(MPN)</p>
            </button>
            <button
              onClick={() => setSelectedCategory('Category3')}
              className="p-2"
              style={{background: 'black', color: 'white', cursor: 'pointer'}}
            >
              <p className="text-left">Bright Comodities</p>
            </button>
            <button
              onClick={() => setSelectedCategory('Category4')}
              className="p-2"
              style={{background: 'black', color: 'white', cursor: 'pointer'}}
            >
              <p className="text-left">Pearl International</p>
            </button>
            <button
              onClick={() => setSelectedCategory('Category5')}
              className="p-2"
              style={{background: 'black', color: 'white', cursor: 'pointer'}}
            >
              <p className="text-left">ARC Distributors</p>
            </button>
            <button
              onClick={() => setSelectedCategory('Category6')}
              className="p-2"
              style={{background: 'black', color: 'white', cursor: 'pointer'}}
            >
              <p className="text-left">Shree Balaji Overseas</p>
            </button>
            <button
              onClick={() => setSelectedCategory('Category7')}
              className="p-2"
              style={{background: 'black', color: 'white', cursor: 'pointer'}}
            >
              <p className="text-left">Paradise Nutrition</p>
            </button>
            <button
              onClick={() => setSelectedCategory('Category8')}
              className="p-2"
              style={{background: 'black', color: 'white', cursor: 'pointer'}}
            >
              <p className="text-left">Unlimited Nutrition</p>
            </button>
            <button
              onClick={() => setSelectedCategory('Category9')}
              className="p-2"
              style={{background: 'black', color: 'white', cursor: 'pointer'}}
            >
              <p className="text-left">Musclehouse</p>
            </button>
            <button
              onClick={() => setSelectedCategory('Category10')}
              className="p-2"
              style={{background: 'black', color: 'white', cursor: 'pointer'}}
            >
              <p className="text-left">Molecule Hub</p>
            </button>
            <button
              onClick={() => setSelectedCategory('Category11')}
              className="p-2"
              style={{background: 'black', color: 'white', cursor: 'pointer'}}
            >
              <p className="text-left">SSNC</p>
            </button>
            <button
              onClick={() => setSelectedCategory('Category12')}
              className="p-2"
              style={{background: 'black', color: 'white', cursor: 'pointer'}}
            >
              <p className="text-left">AM Lifestyle</p>
            </button>
          </div>
          <div className="col">
            {data
              .filter(
                (item) =>
                  selectedCategory === 'All' ||
                  item.category === selectedCategory,
              ) // Adjust 'category' to your actual category property
              .map((item, index) => (
                <Try
                  key={index}
                  img={item.img}
                  email={item.email}
                  aboutUs={item.aboutUs}
                  website={item.website}
                  phone={item.phone}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certi;
