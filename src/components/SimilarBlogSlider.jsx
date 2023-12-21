import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Card from "./Card";

import "swiper/css";
import "swiper/css/pagination";

const SimilarBlogSlider = ({ staticTags }) => {
  return (
    <div className="mb-96">
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        pagination={true}
        modules={[Pagination]}
        draggable={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card staticTags={staticTags} />
        </SwiperSlide>
        <SwiperSlide>
          <Card staticTags={staticTags} />
        </SwiperSlide>
        <SwiperSlide>
          <Card staticTags={staticTags} />
        </SwiperSlide>
        <SwiperSlide>
          <Card staticTags={staticTags} />
        </SwiperSlide>
        <SwiperSlide>
          <Card staticTags={staticTags} />
        </SwiperSlide>
        <SwiperSlide>
          <Card staticTags={staticTags} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SimilarBlogSlider;
