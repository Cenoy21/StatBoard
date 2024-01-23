import "./dashboard.css";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="main-left">
        <div className="left-top">
          <img src="Briefcase.png" alt="" />
          <img src="StatBoard.png" alt="" />
        </div>
        <div className="left-center">
          <NavLink to="/">Dashboard</NavLink>
        </div>
        <div className="left-bottom"></div>
      </div>
      <div className="main-right"></div>
    </>
  );
};

export default Dashboard;
