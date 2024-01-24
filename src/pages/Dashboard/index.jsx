import "./dashboard.css";
import { NavLink } from "react-router-dom";
import Graph from "../../components/Graph";
import Pie from "../../components/Pie";
import Table from "../../components/Table";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
        <div className="right-top">
          <h2>
            Good Morning ! <img src="" alt="" />
          </h2>
          <div className="user">
            <div className="content">
              <p className="p1">John Doe</p>
              <p className="p2">john@doe.com</p>
            </div>
            <img src="Rectangle 10.png" alt="no image" />
          </div>
        </div>
        <div className="right-center">
          <div className="center-left">
            <Graph />
          </div>
          <div className="center-right">
            <Pie />
          </div>
        </div>
        <div className="right-bottom">
          <Table />
          <Card
            sx={{
              width: 350,
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          >
            <CardMedia
              sx={{ height: 340 }}
              image="media.png"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                John Doe
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ textAlign: "center" }}
              >
                CEO
              </Typography>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button size="small">
                <img src="facebook.png" alt="" />
              </Button>
              <Button size="small">
                <img src="instagram.png" alt="" />
              </Button>
              <Button size="small">
                <img src="twitter.png" alt="" />
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
