import React from 'react';

const testimonialsData = [
  {
    testimonial: "The product quality was really good and the price was also somewhat affordable. Go for the ON Nutrition Whey Protein package.",
    overview: "Anupam Kumar, New Delhi"
  },
  {
    testimonial: "All types of supplements were there that are required for my bodybuilding. Although I would suggest adding more flavor options if possible. Else everything was great.",
    overview: "Akash Yaduvansi, Bangalore"
  },
  {
    testimonial: "The ordering experience was quite easy as I order supplements on a monthly basis. Overall a good experience up till now.",
    overview: "Rashmi Singh, Noida"
  },
  {
    testimonial: "Recently they added more flavors of whey protein, and I was literally looking for the flavors option. 100% satisfied with BuildMyBody.",
    overview: "Saket Kumar, Noida"
  },
  {
    testimonial: "Decent but flavors and categories could be increased.",
    overview: "Smith Kumar, Patna"
  },
  {
    testimonial: "Ordered the ON Whey Protein and got it delivered within 3 days. Good job, guys, keep it up.",
    overview: "Bhavya Sharma, Delhi"
  }
];

const Testimonials = () => {
  return (
    <section id="testmon" className="mt-3">
      <div className="container-xl pt-5 pb-5">
        <div className="row">
          <div className="col-sm-12">
            <div
              className="d-flex justify-content-center mb-5"
              style={{ flexDirection: 'column', alignItems: 'center' }}
            >
              <h1
                className="custom-heading3 text-center"
                style={{ color: '#ff2828', fontWeight: '900' }}
              >
                <em>Customer Reviews</em>
              </h1>
              <hr className="h1-hr" />
            </div>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                {testimonialsData.map((_, index) => (
                  <li
                    key={index}
                    data-target="#myCarousel"
                    data-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  />
                ))}
              </ol>
              {/* Wrapper for carousel items */}
              <div className="carousel-inner">
                {testimonialsData.map((testimonial, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <div className="row d-flex justify-content-center">
                      <div className="col">
                        <div className="media">
                          <div className="media-body">
                            <div className="testimonial">
                              <p style={{ fontSize: '1.5rem' }}>{testimonial.testimonial}</p>
                              <p className="overview">{testimonial.overview}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Add other testimonials rendering here if needed */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
