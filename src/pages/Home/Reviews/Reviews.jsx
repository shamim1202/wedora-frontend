import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Reviews = () => {
  const reviews = [
    {
      name: "Alice Johnson",
      image: "https://i.pravatar.cc/100?img=1",
      rating: 5,
      text: "Amazing decorators! They made our wedding magical.",
    },
    {
      name: "Michael Smith",
      image: "https://i.pravatar.cc/100?img=2",
      rating: 4,
      text: "Great service and very professional. Highly recommend!",
    },
    {
      name: "Sophia Lee",
      image: "https://i.pravatar.cc/100?img=3",
      rating: 5,
      text: "Loved the floral design. Decorators were very creative.",
    },
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/100?img=4",
      rating: 4,
      text: "Quick response and amazing decoration ideas!",
    },
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/100?img=4",
      rating: 4,
      text: "Quick response and amazing decoration ideas!",
    },
    {
      name: "Michael Smith",
      image: "https://i.pravatar.cc/100?img=2",
      rating: 4,
      text: "Great service and very professional. Highly recommend!",
    },
  ];

  return (
    <section className="py-16 bg-pink-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10">
          What Our Users Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-left mx-2">
                <div className="flex items-center mb-4">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      {r.name}
                    </h3>
                    <div className="text-yellow-400">
                      {"★".repeat(r.rating)} {"☆".repeat(5 - r.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {r.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
