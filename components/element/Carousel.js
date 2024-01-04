/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper';

function Carousel({ imageSrcs = [], gap = 30, delay = 2000 }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={gap}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Autoplay, Pagination]}
        className="aspect-video"
      >
        {imageSrcs.map((src) => (
          <SwiperSlide key={src}>
            <img src={src} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
