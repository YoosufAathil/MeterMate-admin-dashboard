import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useParams } from "react-router-dom";

const Single = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      console.log("Fetching user with ID:", id);
      const docRef = doc(db, "users", id); // Get a reference to the user document
      const docSnap = await getDoc(docRef); // Fetch the document
      console.log("Fetched document:", docSnap);
      if (docSnap.exists()) {
        setUser(docSnap.data()); // If the document exists, set the user state to the document's data
      } else {
        console.log("No such document!");
      }
    };
    fetchUser(); // Call the fetchUser function
  }, [id]); // Dependency array for useEffect. The effect will rerun whenever id changes

  if (!user) {
    // If the user data hasn't been fetched yet, display a loading message
    return <div>Loading...</div>;
  }
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={user.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{user.fullname}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email} </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{user.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">NIC Number:</span>
                  <span className="itemValue">{user.nic}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Meter ID:</span>
                  <span className="itemValue">{user.meterid}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
