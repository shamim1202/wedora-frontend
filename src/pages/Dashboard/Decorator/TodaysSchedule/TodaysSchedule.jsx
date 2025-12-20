import { motion } from "framer-motion";

const schedules = [
  {
    id: 1,
    event: "Wedding Setup",
    venue: "Hotel Serena",
    time: "9:00 AM - 2:00 PM",
    note: "Stage & floral decor",
  },
  {
    id: 2,
    event: "Reception Decoration",
    venue: "Banani Convention Hall",
    time: "4:00 PM - 8:00 PM",
    note: "Lighting & table setup",
  },
];

const TodaysSchedule = () => {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Today’s Schedule</h1>

      {/* Schedule Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {schedules.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow"
          >
            <h2 className="text-lg font-semibold mb-2">{item.event}</h2>
            <p className="text-sm text-gray-500 mb-1">📍 {item.venue}</p>
            <p className="text-sm text-gray-500 mb-1">⏰ {item.time}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              {item.note}
            </p>

            <button className="mt-4 text-primary font-medium hover:underline">
              View Project
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TodaysSchedule;
