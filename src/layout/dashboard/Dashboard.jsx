import { Outlet } from "react-router-dom";
import Dashnavbar from "../../Components/DashNav/DashNavbar";

const Dashboard = () => {
    return (
        <div>
            <Dashnavbar />
            <Outlet />
        </div>
    );
};

export default Dashboard;