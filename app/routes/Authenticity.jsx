import { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '~/firebase';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar';
import banner1mob from '../img/banner1mob.png';
import frame1 from '../img/frame1.png';
import frame2 from '../img/frame2.png';
import frame3 from '../img/frame3.png';
import Authenticityimg from '../img/authenticity3.jpg';
import verify from '../img/verify.png'
// import { Oval } from 'react-loader-spinner';
export const meta = () => {
  return [
    { title: 'BuildMyBody | Verify Your Products' },
    {
      name: 'description',
      content: 'Verify your fitness products on BuildMyBody using the 14-digit code. Ensure the authenticity of your supplements. Read reviews and testimonials from customers.',
    },
    { name: 'keywords', content: 'BuildMyBody, Verify Products, Fitness Supplements, Code Authentication, Reviews, Testimonials, Authenticity' },
  ];
};

const Authenticity = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [productDetails, setProductDetails] = useState({});
  // const [loading, setLoading] = useState(false); // State variable to track loading state

  // // Function to handle loading state
  // const handleLoading = () => {
  //   setLoading(true);
  //   // You can perform additional actions here, such as fetching data
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const snapshot = await getDoc(doc(db, 'codes', code));

    if (snapshot.exists()) {
      setMessage('100% Authentic Certified Product.');
      setProductDetails(snapshot.data());
    } else {
      setMessage('Code not found! Please check your code again');
    }
  };



  return (
    <>
      {/* {loading && (
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
      )} */}
      <Navbar />
      <section id="authenticity-section">
        <div className="container-fluid">
          <header className="text-center mt-4 d-flex justify-content-start mb-3 flex-column align-items-center">
            <h1 className="font-weight-bolder" style={{ fontWeight: '900', color: '#ff2828' }}>
              <em>Verify your products</em>
            </h1>
            <hr className="h1-hr" />
          </header>

          <div className="first d-none d-lg-block d-md-block">
            <div className="verify-parent">
              <div className="verify-child">
                <form onSubmit={handleSubmit} className="input-group mb-3 pt-3 pt-lg-5 d-flex flex-column">
                  <input
                    type="text"
                    className="form-control w-100 p-4 pr-5"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter 14-digit code"
                    aria-label="Product Code"
                    aria-describedby="flash-button"
                  />
                  <button type="submit" id="flash-button" className="p-2 rounded" >
                    Verify Your Product
                  </button>

                  <div id="imageContainer">
                    {message === '100% Authentic Certified Product.' && (
                      <div className="row d-flex align-items-center mt-2 flex-column">
                        <div className="">
                          <figure>
                            <img src={Authenticityimg} alt="Authenticated Product" className="mt-3" />
                          </figure>
                        </div>
                        <div className="">
                          <p className="h5 font-weight-bolder text-light">{message}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
              <figure>
                <img src={verify} className="w-100" style={{ borderRadius: '1rem' }} alt="Authenticity Banner" />
              </figure>


            </div>

          </div>


          <div className="second d-block d-lg-none d-md-none">
            <div className="">
              <figure>
                <img src={verify} className="w-100" style={{ borderRadius: '1rem' }} alt="Authenticity Banner" />
              </figure>
              <div className="">
                <form onSubmit={handleSubmit} className="input-group mb-3 pt-3 pt-lg-5 d-flex flex-column">
                  <input
                    type="text"
                    className="form-control w-100 p-4 pr-5"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter 14-digit code"
                    aria-label="Product Code"
                    aria-describedby="flash-button"
                  />
                  <button type="submit" id="flash-button" className="p-2 rounded" >
                    Verify Your Product
                  </button>

                  <div id="imageContainer">
                    {message === '100% Authentic Certified Product.' && (
                      <div className="row align-items-center mt-2 ">
                        <div className="col-6 col-md-4 col-lg-4">
                          <figure>
                            <img src={Authenticityimg} alt="Authenticated Product" className="mt-3" />
                          </figure>
                        </div>
                        <div className="col-6 col-md-8 col-lg-8">
                          <p className="h5 font-weight-bolder ">{message}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>



            </div>

          </div>


          <div className="bottom-section">
            <p className="h2 font-weight-bolder text-center pb-5 pt-2">Product Authenticity Tips</p>
            <div className="row pb-5">
              <div className="col-12 col-md-6 col-lg-4 pt-2 text-center">
                <figure>
                  <img src={frame1} className="h-75" alt="Frame 1" />
                </figure>
                <p className="p-4 font-weight-bolder">Only accept products with an authentication sticker</p>
              </div>
              <div className="col-12 col-md-6 col-lg-4 text-center">
                <figure>
                  <img src={frame2} className="h-75" alt="Frame 2" />
                </figure>
                <p className="p-4 font-weight-bolder">
                  Don't accept products with stickers that have been scratched off
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4 text-center">
                <figure>
                  <img src={frame3} className="h-75" alt="Frame 3" />
                </figure>
                <p className="p-4 font-weight-bolder">Only buy from authorized retailers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Authenticity;
