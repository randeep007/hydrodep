import { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '~/firebase';
// import verify from '../../img/verify.png'
// export const meta = () => {
//   return [
//     { title: 'BuildMyBody | Verify Your Products' },
//     {
//       name: 'description',
//       content: 'Verify your fitness products on BuildMyBody using the 14-digit code. Ensure the authenticity of your supplements. Read reviews and testimonials from customers.',
//     },
//     { name: 'keywords', content: 'BuildMyBody, Verify Products, Fitness Supplements, Code Authentication, Reviews, Testimonials, Authenticity' },
//   ];
// };

const Verify = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [productDetails, setProductDetails] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted');
    const snapshot = await getDoc(doc(db, 'codes', code));
    if (snapshot.exists()) {
      setMessage('Authentication completed, product verified.');
      setProductDetails(snapshot.data());
      console.log('Found');
    } else {
      setMessage('Code not found');
      console.log('Not Found');
    }
  };

  return (
    <>
      <section id="verify">
        <div className="container pt-5 pb-5">
          <div className="d-flex justify-content-center" style={{ flexDirection: 'column', alignItems: 'center' }}>
            <h1 className="custom-heading3 text-center" style={{ color: '#ff2828', fontWeight: '900' }}>
              <em>Verify Your Products</em>
            </h1>
            <hr className="h1-hr" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter 14-digit code"
              />
              <button type="submit">Verify</button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Verify;
