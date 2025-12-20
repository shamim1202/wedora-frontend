import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const decorators = [
  {
    name: "Elegant Events",
    specialty: "Wedding & Home Decoration",
    rating: 4.8,
    image: "https://i.ibb.co/3W9JzJr/decorator1.jpg",
  },
  {
    name: "Luxury Designs",
    specialty: "Event & Party Planning",
    rating: 4.5,
    image: "https://i.ibb.co/LQq8JmK/decorator2.jpg",
  },
  {
    name: "Dream Weddings",
    specialty: "Wedding & Ceremony Decoration",
    rating: 4.9,
    image: "https://i.ibb.co/ZxVYQKd/decorator3.jpg",
  },
  {
    name: "Golden Touch",
    specialty: "Home & Office Decoration",
    rating: 4.7,
    image: "https://i.ibb.co/kxGpF4c/decorator4.jpg",
  },
  {
    name: "Dream Weddings",
    specialty: "Wedding & Ceremony Decoration",
    rating: 4.9,
    image: "https://i.ibb.co/ZxVYQKd/decorator3.jpg",
  },
  {
    name: "Luxury Designs",
    specialty: "Event & Party Planning",
    rating: 4.5,
    image: "https://i.ibb.co/LQq8JmK/decorator2.jpg",
  },
];

const TopDecorators = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-playfair font-semibold text-secondary text-center mb-5 md:mb-12">
        Top Decorators
      </h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {decorators.map((decorator, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src={decorator.image}
                alt={decorator.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold text-secondary mb-1">
                {decorator.name}
              </h3>
              <p className="text-sm md:text-base text-gray-500 mb-2">
                {decorator.specialty}
              </p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <span className="font-semibold text-gray-700">
                  {decorator.rating}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopDecorators;
