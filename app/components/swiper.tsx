'client use'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Autoplay } from 'swiper';
import { useEffect, useState } from 'react';
import 'swiper/css';

export default function SwiperComponent() {
  const [loading, setLoading] = useState<boolean>(false);
  const swiperOption: SwiperProps = {
    slidesPerView: 3.5,
    spaceBetween: 0,
    loop: true,
    modules: [Autoplay],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1023: {
        slidesPerView: 3.5,
      },
      768: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 1,
      },
    }
  };

  useEffect(() => {
    setLoading(true);
  }, [])

  return (
    <>
      {loading && (
        <Swiper {...swiperOption}>
          <SwiperSlide className='swiper-item'>Slide 1</SwiperSlide>
          <SwiperSlide className='swiper-item'>Slide 2</SwiperSlide>
          <SwiperSlide className='swiper-item'>Slide 3</SwiperSlide>
          <SwiperSlide className='swiper-item'>Slide 4</SwiperSlide>
          <SwiperSlide className='swiper-item'>Slide 5</SwiperSlide>
          <SwiperSlide className='swiper-item'>Slide 6</SwiperSlide>
          <SwiperSlide className='swiper-item'>Slide 7</SwiperSlide>
        </Swiper>
      )}
    </>
  );
}