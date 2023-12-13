import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';





const Swipers = () => {
    return (
        <>
        <h2 className='text-center font-extrabold text-2xl'>Online Course Gallery</h2>
           <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mr-24"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/7NjLFcd/seo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/TP0sZMv/email.jpg" />
        </SwiperSlide>
       
        <SwiperSlide>
          <img src="https://i.ibb.co/JjDv8Fh/imgg.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/TYjjCGg/imgs2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/f2cMBnk/training-1651251-1920.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/phjqZxR/website-3374825-1920.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
     
      </Swiper>
        </>
    );
};

export default Swipers;