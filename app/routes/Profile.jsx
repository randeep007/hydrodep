import Footer from '~/Components/Footer/Footer';
import Navbar from '~/Components/Navbar';

export const meta = () => {
  return [{ title: 'BuildMyBody|My Profile' }];
}
export default function Profile() {

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>My Profile</h1>
        <hr />
      </div>
      <div
        className="container"
        style={{
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: 4,
          padding: '1rem',
        }}
      >
        <div className="row">
          <div
            className="col-md-4 col-xl-2 d-md-flex flex-column justify-content-md-center align-items-md-center"
            style={{ margin: '0 auto', textAlign: 'center' }}
          >
            <img
              className="rounded-circle"
              style={{
                borderRadius: '50%',
                margin: '0 auto',
                width: 150,
                height: 150,
              }}
              src="Samyak_Jain.jpeg"
            />
          </div>
          <div className="col-8 col-sm-8 col-md-4 col-xl-6 d-md-flex flex-column justify-content-md-center">
            <p>Name</p>
            <p>Email</p>
          </div>
          <div className="col-4 col-sm-4 col-md-4 d-flex d-md-flex justify-content-end align-items-start justify-content-md-end align-items-md-center">
            <button className="btn btn-primary" type="button">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          marginTop: '1rem',
          borderRadius: 4,
          padding: '1rem',
          border: '1px solid var(--gray)',
        }}
      >
        <h2>Personal Information</h2>
        <div className="row">
          <div className="col-sm-8 col-md-4">
            <p>
              <strong>Name</strong>
            </p>
            <p>Paragraph</p>
            <p>
              <strong>Email Address</strong>
            </p>
            <p>Paragraph</p>
          </div>
          <div className="col-sm-8 col-md-4">
            <p>
              <strong>Gender</strong>
            </p>
            <p>Paragraph</p>
            <p>
              <strong>Phone Number</strong>
            </p>
            <p>Paragraph</p>
          </div>
          <div className="col-12 col-sm-4 col-md-4 d-flex d-md-flex justify-content-end align-items-start justify-content-md-end align-items-md-center">
            <button className="btn btn-primary" type="button">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          marginTop: '1rem',
          borderRadius: 4,
          padding: '1rem',
          border: '1px solid var(--gray)',
        }}
      >
        <h2>Address</h2>
        <div className="row">
          <div className="col-sm-8 col-md-4">
            <p>
              <strong>Country</strong>
            </p>
            <p>Paragraph</p>
            <p>
              <strong>Postal Code</strong>
            </p>
            <p>Paragraph</p>
          </div>
          <div className="col-sm-8 col-md-4">
            <p>
              <strong>City/State</strong>
            </p>
            <p>Paragraph</p>
            <p>
              <strong>Street Name</strong>
            </p>
            <p>Paragraph</p>
          </div>
          <div className="col-12 col-sm-4 col-md-4 d-flex d-md-flex justify-content-end align-items-start justify-content-md-end align-items-md-center">
            <button className="btn btn-primary" type="button">
              Edit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
