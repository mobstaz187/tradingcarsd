import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Card } from './Card';
import { cards } from '../data/cards';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Carousel: React.FC = () => {
  return (
    <div className="w-full py-12">
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="w-auto flex justify-center">
            <Card card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}