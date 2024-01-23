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
          <NavLink to="/" className="navlink">
            <img src="Circled Menu.png" />
            Dashboard
          </NavLink>
          <NavLink to="/support" className="navlink">
            <img src="Support.png" />
            Support
          </NavLink>
          <NavLink to="/plugins" className="navlink">
            <img src="Puzzle.png" />
            Plugins
          </NavLink>
          <NavLink to="/help" className="navlink">
            <img src="Help.png" />
            Help
          </NavLink>
        </div>
        <div className="left-bottom">
          <p>Logout</p>
          <img src="Shutdown.png" alt="" />
        </div>
      </div>
      <div className="main-right">
        <div className="right-top"></div>
        <div className="right-center"></div>
        <div className="right-bottom"></div>
      </div>
    </>
  );
};

export default Dashboard;
