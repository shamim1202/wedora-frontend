import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const bookingData = [
  { month: "Jan", bookings: 1 },
  { month: "Feb", bookings: 2 },
  { month: "Mar", bookings: 1 },
  { month: "Apr", bookings: 3 },
  { month: "May", bookings: 2 },
];

const UserStatistics = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-accent">
        My Booking Statistics
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">Total Bookings</p>
          <h3 className="text-2xl font-bold text-primary">9</h3>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">Completed Events</p>
          <h3 className="text-2xl font-bold text-green-600">6</h3>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">Upcoming Events</p>
          <h3 className="text-2xl font-bold text-secondary">3</h3>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">Total Spent</p>
          <h3 className="text-2xl font-bold text-accent">৳ 1,25,000</h3>
        </div>
      </div>

      {/* Booking Trend */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">
          Booking Activity Over Time
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={bookingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="bookings"
              stroke="#d4af37"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserStatistics;
