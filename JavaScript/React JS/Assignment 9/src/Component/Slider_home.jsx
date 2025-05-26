import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Slider_Banner_App from './Slider_Banner_App';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Slider_home = ({data}) => {
  // const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);
  const navigate = useNavigate();
  // const { setData } = useContext(AuthContext);

  const handleClick = (appData) => {
    const data = localStorage.getItem("AppData");
    if (data) {
      localStorage.removeItem("AppData");
    }
    localStorage.setItem("AppData", JSON.stringify(appData));
    navigate("/about");
  };

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

    return (
      <>
      <Swiper onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={setSwiperRef}
          navigation={true}
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={3}
          pagination={{
            type: 'fraction',
          }}
          autoplay

          breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 1.2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        },
      }}
      className="w-full"
    >
    
        {data.map((app , index) => {
          return <SwiperSlide onClick={() => {handleClick(data[activeIndex])}}> <Slider_Banner_App key={app.id} app={app} isActive={index === activeIndex}/> </SwiperSlide>;
        })}
    
     
      </Swiper>
      
      <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          
        </button>
        <button onClick={() => append()} className="append-slide">
          
        </button>
        <button onClick={() => append2()} className="append-2-slides">
         
        </button>
            </p>
            </>
  );
};

export default Slider_home;
