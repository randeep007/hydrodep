import banner1 from '../../img/banner1.png'
import banner2 from '../../img/banner2.jpg'
import banner3 from '../../img/banner3.jpg'
import banner4 from '../../img/banner4.jpg.webp'
import banner5 from '../../img/banner5.jpg.webp'
import banner6 from '../../img/banner6.jpg.webp'
import banner7 from '../../img/banner7.png'
import banner1mob from '../../img/banner1mob.png'
import banner2mob from '../../img/banner2mob.png.webp'
import banner4mob from '../../img/banner4mob.png.webp'
import banner5mob from '../../img/banner5mob.png.webp'
import banner6mob from '../../img/banner6mob.jpg.webp'
// import banner7mob from '../../img/banner7mob.png'
import trial from '../../img/trial.png'
import trial2 from '../../img/trial2.png'


export const meta = () => {
  return [
    { title: 'BuildMyBody | Fitness Carousel' },
    { name: 'description', content: 'Explore fitness articles and products on BuildMyBody for health and wellness tips.' },
    { name: 'keywords', content: 'BuildMyBody, Fitness Articles, Health, Wellness, Products' },
  ];
};

const Carousel = () => {
  return (
    <>
      <section className='d-none d-lg-block'>
        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators2" data-slide-to={0} className="active d-none" />
            <li className="d-none" data-target="#carouselExampleIndicators2" data-slide-to={1} />
            <li className="d-none" data-target="#carouselExampleIndicators2" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item ">
              <a href="/certificates">
                <img className="d-block w-100" src={banner1} alt="First slide" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/products/protein">
                <img className="d-block w-100" src={banner2} alt="Second slide" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/products/gainers">
                <img className="d-block w-100" src={banner4} alt="Fourth slide" />
              </a>
            </div>
            {/* <div className="carousel-item">
              <img className="d-block w-100" src={banner3} alt="Third slide" />
            </div> */}


            <div className="carousel-item">
              <a href="/products/humongous-pharma">
                <img className="d-block w-100" src={banner6} alt="Sixth slide" />
              </a>
            </div>
            <div className="carousel-item active">
              <a href="/products/all">
                <img className="d-block w-100" src={banner7} alt="Seventh slide" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="products/enhanced-athlete">
                <img className="d-block w-100" src={banner5} alt="Fifth slide" />
              </a>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
            <div>
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </div>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
            <div>
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </div>
          </a>
        </div>
      </section>


      <section className='d-md-block d-lg-none'>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active d-none"
            />
            <li className="d-none" data-target="#carouselExampleIndicators " data-slide-to={1} />
            <li className="d-none" data-target="#carouselExampleIndicators " data-slide-to={2} />
          </ol>
          <div className="carousel-inner">

            {/* <div className="carousel-item ">
              <a href="/certificates">
                <img className="d-block w-100" src={banner1mob} alt="First slide" />
              </a>
            </div> */}
            <div className="carousel-item ">
              <a href="/certificates">
                <img className="d-block w-100" src={trial} alt="First slide" />
              </a>
            </div>

            <div className="carousel-item">
              <a href="/products/protein">
                <img className="d-block w-100" src={banner2mob} alt="Second slide" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="/products/gainers">
                <img className="d-block w-100" src={banner4mob} alt="Fourth slide" />
              </a>
            </div>
            {/* <div className="carousel-item">
              <img className="d-block w-100" src={banner3} alt="Third slide" />
            </div> */}


            <div className="carousel-item">
              <a href="/products/humongous-pharma">
                <img className="d-block w-100" src={banner6mob} alt="Sixth slide" />
              </a>
            </div>
            <div className="carousel-item active">
              <a href="/products/all">
                <img className="d-block w-100" src={trial2} alt="Seventh slide" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="products/enhanced-athlete">
                <img className="d-block w-100" src={banner5mob} alt="Fifth slide" />
              </a>
            </div>

          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >

            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>

          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >

            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>

          </a>
        </div>
      </section>

    </>
  );
};

export default Carousel;
