import { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { MediaFile } from '@shopify/hydrogen-react';
// import "./styles.css";



const ProductCarousal = ({ media }) => {
  if (!media.length) {
    return null;
  }
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const typeNameMap = {
    MODEL_3D: 'Model3d',
    VIDEO: 'Video',
    IMAGE: 'MediaImage',
    EXTERNAL_VIDEO: 'ExternalVideo',
  };

  //i dont seem to need this
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <div style={{ padding: '0 30px', maxWidth: '500px' }} className="mx-auto">
      <Slider className="mainSlider" asNavFor={nav2} ref={slider1}>
        {media.map((med, i) => {
          let extraProps = {};


          if (med.mediaContentType === 'MODEL_3D') {
            extraProps = {
              interactionPromptThreshold: '0',
              ar: true,
              loading: 'eager',
              disableZoom: true,
            };
          }

          const data = {
            ...med,
            __typename:
              typeNameMap[med.mediaContentType] || typeNameMap['IMAGE'],
            image: {
              ...med.image,
              altText: med.alt || 'Product image',
            },
          };
          return (
            <div className="" key={i}>
              <MediaFile
                tabIndex="0"
                data={data}
                style={{
                  margin: '0 auto',
                  width: '100%',
                  height: '100%',
                  aspectRatio: '1/1',
                }}
                {...extraProps}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductCarousal;
