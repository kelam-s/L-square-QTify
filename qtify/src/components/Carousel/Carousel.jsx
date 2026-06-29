import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LeftNavButton from "../NavButton/LeftNavButton";
import RightNavButton from "../NavButton/RightNavButton";
import styles from "./Carousel.module.css";

function Carousel({ items, renderItem }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={true}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id || index} style={{ width: "auto" }}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={prevRef} className={`${styles.navButton} ${styles.prevButton}`}>
        <LeftNavButton />
      </div>
      <div ref={nextRef} className={`${styles.navButton} ${styles.nextButton}`}>
        <RightNavButton />
      </div>
    </div>
  );
}
export default Carousel;