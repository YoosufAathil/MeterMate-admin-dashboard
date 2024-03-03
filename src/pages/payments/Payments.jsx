import "./payments.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Payments = () => {
  return (
    <div className="payments">
      <Sidebar />
      <div className="paymentsContainer">
        <Navbar />
        Payments
      </div>
    </div>
  );
};

export default Payments;
