import React from 'react';
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import AppCard from "./AppCard";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import 'swiper/css/autoplay';
import Slider_Banner_App from "./Slider_Banner_App";

import { EffectCards } from 'swiper/modules';

const Slider_small_scree = () => {

    const [data, setData] = useState([]);
    
      useEffect(() => {
        fetch("education.json")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
    
    return (
        <Swiper
        effect={'cards'}
      modules={[Autoplay, EffectCards]}
        //   spaceBetween={50}
            centeredSlides={true}
            className='myswiper'
        //   slidesPerView={3}
        //   coverflowEffect={{
        //     rotate: 50,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: true,
        //   }}
          autoplay
      onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        //   breakpoints={{
        //       320: {spaceBetween : 40},
        //       650: {spaceBetween : 30},
        //       1000: {spaceBetween : 28}
        //   }}
    >
    
        {data.map((app) => {
          return <SwiperSlide> <Slider_Banner_App key={app.id} app={app}/> </SwiperSlide>;
        })}
      
    </Swiper>
    );
};

export default Slider_small_scree;