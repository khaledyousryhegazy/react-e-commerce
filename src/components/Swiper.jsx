import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { regularBreakPoints } from "../data/data";
import Item from "./Item";

function ItemsSwiper({ data }) {
  return (
    <>
      <Swiper
        className="mySwiper"
        grabCursor={true}
        breakpoints={regularBreakPoints}
        spaceBetween={30}
      >
        {data?.map((item) => {
          return (
            <SwiperSlide key={item?.id}>
              <Item item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default ItemsSwiper;
