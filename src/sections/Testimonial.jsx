import React from "react";
import { testimonials } from "../constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-4xl ">
        <h2 className="text-4xl font-bold text-center text-gray-500 mb-12">
          Clientes Satisfechos
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-6">
                <img
                  src={testimonial.image}
                  alt={`Antes y despues de: ${testimonial.name}`}
                  className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-2"
                />
                <div className="md:ml-6 md:text-left text-center ">
                  <h3 className="text-2xl font-semibold  text-gray-800 mb-2">
                    {testimonial.name}
                  </h3>
                  <p className=" mb-2">{testimonial.quote}</p>

                  <div className="flex md:mt-2 justify-center text-yellow-500">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
