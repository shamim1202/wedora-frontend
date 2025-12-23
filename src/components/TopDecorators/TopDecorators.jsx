import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

// const decorators = [
//   {
//     name: "Elegant Events",
//     specialty: "Wedding & Home Decoration",
//     rating: 4.8,
//     image: "https://i.ibb.co/3W9JzJr/decorator1.jpg",
//   },
//   {
//     name: "Luxury Designs",
//     specialty: "Event & Party Planning",
//     rating: 4.5,
//     image: "https://i.ibb.co/LQq8JmK/decorator2.jpg",
//   },
//   {
//     name: "Dream Weddings",
//     specialty: "Wedding & Ceremony Decoration",
//     rating: 4.9,
//     image: "https://i.ibb.co/ZxVYQKd/decorator3.jpg",
//   },
//   {
//     name: "Golden Touch",
//     specialty: "Home & Office Decoration",
//     rating: 4.7,
//     image: "https://i.ibb.co/kxGpF4c/decorator4.jpg",
//   },
//   {
//     name: "Luxury Designs",
//     specialty: "Event & Party Planning",
//     rating: 4.5,
//     image: "https://i.ibb.co/LQq8JmK/decorator2.jpg",
//   },
//   {
//     name: "Elegant Events",
//     specialty: "Wedding & Home Decoration",
//     rating: 4.8,
//     image: "https://i.ibb.co/3W9JzJr/decorator1.jpg",
//   },
// ];

const TopDecorators = () => {
  const axiosSecure = useAxiosSecure();
  const [decorators, setDecorators] = useState([]);

  useEffect(() => {
    const fetchDecorators = async () => {
      try {
        const response = await axiosSecure.get("/top-decorators");
        setDecorators(response.data);
      } catch (err) {
        console.error(err);;
      }
    };
    fetchDecorators();
  }, [axiosSecure]);

  if (decorators.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 font-medium">No decorators found.</p>
      </div>
    );
  }

  return (
    <div className="bg-pink-50 py-12 md:py-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-playfair font-semibold text-secondary text-center mb-8 md:mb-12">
          Top Decorators
        </h2>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          loop
          spaceBetween={16}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
              navigation: true,
            },
          }}
        >
          {decorators.map((decorator, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center h-full">
                <img
                  src={decorator.image}
                  alt={decorator.displayName}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full object-cover mb-4"
                />

                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary">
                  {decorator.displayName}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1 mb-2">
                  {/* {decorator.specialty} */}
                </p>

                <div className="flex items-center gap-1 text-sm">
                  {/* <FaStar className="text-yellow-500" /> */}
                  <span className="font-semibold text-gray-700">
                    {/* {decorator.rating} */}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default TopDecorators;
