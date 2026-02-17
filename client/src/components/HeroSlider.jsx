import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HeroSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="h-[85vh]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-[85vh] bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: "url('/images/campus1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative text-white text-center px-6">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                Welcome to NIST University
              </h1>
              <p className="text-xl md:text-2xl">
                Excellence in Education, Research & Innovation
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-[85vh] bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: "url('/images/campus2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative text-white text-center px-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Admissions Open 2026
              </h1>
              <p className="text-lg md:text-xl">
                Apply now for UG, PG & Doctoral Programs
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-[85vh] bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: "url('/images/campus3.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative text-white text-center px-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                98% Placement Record
              </h1>
              <p className="text-lg md:text-xl">
                Top Recruiters: Google, Microsoft, Amazon
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
