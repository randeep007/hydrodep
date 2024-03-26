'use client'
import {SlLocationPin} from 'react-icons/sl';
import {BiPhoneCall} from 'react-icons/bi';
import {FaRegPaperPlane} from 'react-icons/fa';
import {BiTime} from 'react-icons/bi';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
// import { toast } from "react-hot-toast"


export const meta = () => {
  return [{title: `BuildMyBody|Contact Us`}];
};
function Contact() {
  const form = useRef();


  const sendEmail = (e) => {
    // const toastMessage = 'Your query has been sent to us. Expect a resolution soon';
    e.preventDefault();
    try {
      emailjs.sendForm(
        'service_hbo1jpp',
        'template_mv0nhvf',
        form.current,
        'LPRYs8otRDNbESDKJ',
      );
      alert('Query Sent, Expect a response soon')
      // toast.success(toastMessage);
      e.target.reset();
    } catch (error) {
      console.log(error, 'Occured while sending Customer query');
      alert('Failed to send message, Try again')
    } finally {
    }
    // toast.error(toastMessage);
    }
    
  return (
    <>
      <Navbar />
      <div className="main-div contact-div">
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28005.941294708296!2d77.114441!3d28.667423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d039f59dcb4e5%3A0x767db4f75b67b6de!2sClub%20Rd%2C%20Samta%20Budh%20Vihar%2C%20Pocket%203%2C%20Paschim%20Puri%2C%20Paschim%20Vihar%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1689448293631!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{border: '0'}}
            loading="lazy"
          ></iframe>
        </div>
        <div className="container-fluid  mt-4 ">
          <div className="row ml-lg-4 d-flex justify-content-between contact-flex">
            <div className="col-lg-5 col-md-12 mt-md-1 ml-lg-4 col-sm-12">
              <p
                className="text-center  contact-touch"
                style={{color: '#474544'}}
              >
                Let's get in touch
              </p>
              {/* <p className='text-center mr-4 '>We're open for any suggestion or just to have a chat</p> */}
              <p className="text-center">
                {/* Location */}
                <div className="row mt-4">
                  <div className=" col-2 text-right">
                    <a
                      href=""
                      className="btn btn-primary btn-lg btn-floating contact-address"
                      role="button"
                    >
                      <SlLocationPin className="contact-logo" />
                    </a>
                  </div>
                  <div className="col text-left ">
                    <p style={{color: '#474544'}}>
                      Shree Sai O2 Nutrition, Club Rd, Samta Budh Vihar, Pocket
                      2, Paschim Puri, Paschim Vihar, Delhi, 110063
                    </p>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className=" col-2 text-right">
                    <a
                      href=""
                      className="btn btn-primary btn-lg btn-floating contact-address "
                      role="button"
                    >
                      <BiPhoneCall className="contact-logo" />
                    </a>
                  </div>
                  <div className="col text-left mt-2">
                    <p style={{color: '#474544'}}>+91 9494979191</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className=" col-2 text-right">
                    <a
                      href=""
                      className="btn btn-primary btn-lg btn-floating contact-address"
                      role="button"
                    >
                      <FaRegPaperPlane className="contact-logo" />
                    </a>
                  </div>
                  <div className="col text-left mt-2">
                    <p>
                      <a
                        href=""
                        className="contact-a"
                        style={{color: '#474544'}}
                      >
                        care@buildmybody.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className=" col-2 text-right">
                    <a
                      href=""
                      className="btn btn-primary btn-lg btn-floating contact-address"
                      role="button"
                    >
                      <BiTime className="contact-logo" />
                    </a>
                  </div>
                  <div className="col text-left">
                    <p style={{color: '#474544'}}>
                      Monday to Saturday: 9am - 10pm <br />
                      Sundays: 10am - 6pm
                    </p>
                  </div>
                </div>
                <p
                  className="text-center contact-issue mt-4 ml-4"
                  style={{color: '#474544'}}
                >
                  We'd love to hear from you - please use the form to send us
                  your message or ideas. Or simply pop in for a cup of fresh tea
                  and a cookie
                </p>
              </p>
            </div>
            <div className="col col-md-12 col-lg-6 mt-md-4 mt-lg-0 mt-sm-4 helo">
              <p
                className="contact-get text-center mr-5"
                style={{color: '#474544'}}
              >
                {' '}
                Get in touch
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="contact-info  mt-4 ">
                  <div className="contact-full-name ">
                    <div className="row   ">
                      <div className="col  ">
                        <p
                          className="text-left contact-name"
                          style={{color: '#474544'}}
                        >
                          Full Name
                        </p>
                        <p className="text-left">
                          {' '}
                          <input
                            type="text"
                            name="name"
                            className="contact-input pb-2 "
                            placeholder="Full Name"
                            required
                          />
                        </p>
                        <p
                          className=" contact-name mt-4 text-left"
                          style={{color: '#474544'}}
                        >
                          Phone Number
                        </p>
                        <p className="text-left ">
                          {' '}
                          <input
                            name="number"
                            type="number"
                            className="contact-input pb-2 "
                            placeholder="Mobile Number"
                            required
                          />
                        </p>

                        <p
                          className="text-left mt-4 contact-name "
                          style={{color: '#474544'}}
                        >
                          Email
                        </p>
                        <p className="text-left ">
                          {' '}
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="contact-subject-input pb-2"
                            required
                          />
                        </p>

                        <p
                          className="text-left mt-4 contact-name"
                          style={{color: '#474544'}}
                        >
                          Message
                        </p>
                        {/* <p className='text-left '> <input type="text" className='contact-subject-input contact-textarea pb-2' placeholder='Please leave your message here' /></p> */}
                        <textarea
                          name="message"
                          id=""
                          style={{width: '100%', maxWidth: '90%'}}
                          rows="5"
                          placeholder="Please leave your text here"
                        ></textarea>
                        <br />
                        <p className="text-center"></p>
                        <button
                        // onClick={notify}
                          type="submit"
                          id="send-btn"
                          className="btn mt-1 mb-3 w-lg-25 contact-button text-light"
                          style={{
                            color: 'white',
                            background: 'black',
                            fontSize: '1rem',
                          }}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <Social /> */}
      </div>

      <Footer />
    </>
  );
}

export default Contact;
