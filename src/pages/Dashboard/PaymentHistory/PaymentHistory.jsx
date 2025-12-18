import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="p-5 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold text-rose-800 md:mb-10 mb-5">
        My Payment History
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL.</th>
              <th>Service Name</th>
              <th>Package Rate</th>
              <th>Payment Status</th>
              <th>Transaction Id</th>
              <th>Tracking Id</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {/* ----- Table Row ----- */}
            {payments.map((payment, i) => (
              <tr key={payment._id} className="">
                <th>{i + 1}</th>
                <td>{payment.serviceName}</td>
                <td>{payment.amount}</td>
                <td className="md:text-xl text-green-500 font-semibold">
                  {payment.paymentStatus}
                </td>
                <td>{payment.transactionId}</td>
                <td>{payment.trackingId}</td>
                <td>{new Date(payment.paidAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
