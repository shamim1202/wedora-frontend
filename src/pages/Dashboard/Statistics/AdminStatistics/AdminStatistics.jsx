import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 120000 },
  { month: "Feb", revenue: 180000 },
  { month: "Mar", revenue: 150000 },
  { month: "Apr", revenue: 220000 },
  { month: "May", revenue: 260000 },
];

const serviceDemandData = [
  { service: "Wedding", bookings: 120 },
  { service: "Home", bookings: 80 },
  { service: "Office", bookings: 45 },
  { service: "Seminar", bookings: 30 },
];

const AdminStatistics = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-accent">
        Revenue & Service Analytics
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <h3 className="text-2xl font-bold text-green-600">৳ 9,50,000</h3>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">This Month</p>
          <h3 className="text-2xl font-bold text-secondary">৳ 2,60,000</h3>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">Total Bookings</p>
          <h3 className="text-2xl font-bold text-primary">275</h3>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">Active Services</p>
          <h3 className="text-2xl font-bold text-accent">12</h3>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Line Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Monthly Revenue Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#f472b6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Service Demand Histogram */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">
            Service Demand (Bookings)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={serviceDemandData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="service" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#d4af37" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminStatistics;
