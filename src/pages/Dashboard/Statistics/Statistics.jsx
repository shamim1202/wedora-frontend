import { motion, scale, transform } from "framer-motion";

// Reusable stat card
const StatCard = ({ title, value }) => (
  <div className="bg-primary/20 dark:bg-gray-900 shadow rounded-xl p-6 text-center border-l-5 border-primary">
    <p className="text-accent/90 text-sm md:text-base">{title}</p>
    <h2 className="md:text-2xl font-bold text-accent/90 mt-2">{value}</h2>
  </div>
);

const Statistics = ({ role = "user" }) => {
  // Dummy data for design purposes
  const userStats = [
    { title: "Total Bookings", value: 12 },
    { title: "Paid Bookings", value: 8 },
    { title: "Pending Payments", value: 4 },
    { title: "Total Spent (৳)", value: 125000 },
  ];

  const decoratorStats = [
    { title: "Services Provided", value: 10 },
    { title: "Total Bookings", value: 25 },
    { title: "Completed Events", value: 20 },
    { title: "Total Earnings (৳)", value: 350000 },
  ];

  const adminStats = [
    { title: "Total Users", value: 120 },
    { title: "Decorators", value: 15 },
    { title: "Total Services", value: 45 },
    { title: "Total Bookings", value: 210 },
    { title: "Revenue (৳)", value: 1850000 },
  ];

  let stats = [];
  if (role === "user") stats = userStats;
  if (role === "decorator") stats = decoratorStats;
  if (role === "admin") stats = adminStats;

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl md:text-5xl font-playfair font-semibold text-accent mb-10 text-center">
        Dashboard Statistics
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            color="pink" // You can change based on importance
          />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
