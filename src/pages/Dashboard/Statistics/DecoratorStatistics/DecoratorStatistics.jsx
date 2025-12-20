import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const earningsData = [
  { month: "Jan", amount: 25000 },
  { month: "Feb", amount: 32000 },
  { month: "Mar", amount: 28000 },
  { month: "Apr", amount: 40000 },
  { month: "May", amount: 45000 },
];

const DecoratorStatistics = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-accent">
        My Earnings Overview
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">Total Earnings</p>
          <h3 className="text-2xl font-bold text-green-600">৳ 1,70,000</h3>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">This Month</p>
          <h3 className="text-2xl font-bold text-secondary">৳ 45,000</h3>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">Completed Events</p>
          <h3 className="text-2xl font-bold text-primary">18</h3>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">Pending Payout</p>
          <h3 className="text-2xl font-bold text-red-500">৳ 12,000</h3>
        </div>
      </div>

      {/* Earnings Chart */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Monthly Earnings Trend</h3>

        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={earningsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#f472b6"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Earnings */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Completed Events</h3>

        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center border rounded-lg p-4"
            >
              <div>
                <p className="font-medium text-accent">
                  Wedding Stage Decoration
                </p>
                <p className="text-sm text-gray-500">Event Date: 12 May 2025</p>
              </div>
              <p className="font-semibold text-green-600">৳ 18,000</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DecoratorStatistics;
