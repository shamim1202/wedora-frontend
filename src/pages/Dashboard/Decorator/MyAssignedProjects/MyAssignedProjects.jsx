import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    eventName: "Rahim & Ayesha Wedding",
    client: "Rahim Khan",
    date: "2025-01-12",
    location: "Dhaka",
    status: "In Progress",
  },
  {
    id: 2,
    eventName: "Corporate Gala Night",
    client: "ABC Ltd",
    date: "2025-01-18",
    location: "Banani",
    status: "Assigned",
  },
];

const MyAssignedProjects = () => {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">My Assigned Projects</h1>

      {/* Projects Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left">Event</th>
              <th className="px-4 py-3 text-left">Client</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <motion.tr
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-b dark:border-gray-700"
              >
                <td className="px-4 py-3 font-medium">{project.eventName}</td>
                <td className="px-4 py-3">{project.client}</td>
                <td className="px-4 py-3">{project.date}</td>
                <td className="px-4 py-3">{project.location}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                    ${
                      project.status === "In Progress"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-primary font-medium hover:underline">
                    View Details
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignedProjects;
