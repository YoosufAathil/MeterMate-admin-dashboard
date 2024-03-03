import "./readings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const readings = () => {
  return (
    <div className="readings">
      <Sidebar />
      <div className="readingsContainer">
        <Navbar />
        Readings
      </div>
    </div>
  );
};

export default readings;
