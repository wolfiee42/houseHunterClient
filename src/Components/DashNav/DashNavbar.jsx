import { Link } from "react-router-dom"
import Container from "../Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { MdOutlineAddHomeWork } from "react-icons/md";




const Dashnavbar = () => {

    const token = localStorage.getItem("Access-token");
    const { signout } = useContext(AuthContext);

    const handleLogout = () => {
        signout();
        return window.location.reload();
    }
    const navitems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard/addhouse" className="flex items-center">Add New House <MdOutlineAddHomeWork className="text-xl" /> </Link></li>
        {
            token && <li><button onClick={handleLogout} className="btn bg-cyan-500 hover:bg-cyan-600 text-white pt-4 rounded-full">Log Out</button></li>
        }
    </>


    return (
        <Container>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navitems}
                        </ul>
                    </div>
                    <h1 className="text-3xl font-bold font-serif">House <span className="text-cyan-500">Hunter</span></h1>
                </div>
                <div className="navbar-end hidden md:flex items-center" >
                    <ul className="menu menu-horizontal px-1 items-center">
                        {navitems}

                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Dashnavbar;