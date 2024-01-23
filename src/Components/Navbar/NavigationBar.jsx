import { Link } from "react-router-dom"
import Container from "../Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const NavigationBar = () => {

    const token = localStorage.getItem("Access-token");
    const { signout } = useContext(AuthContext);

    const handleLogout = () => {
        signout();
        return window.location.reload();
    }
    const navitems = <>
        <li><Link to="/">Home</Link></li>
        {
            token && <> <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogout} className="btn bg-cyan-500 hover:bg-cyan-600 text-white pt-4 rounded-full">Log Out</button></li> </>
        }
        {
            !token && <>
                <li><Link to="/signup">Registration</Link></li>
                <li><Link to="/signin" className="btn bg-cyan-500 hover:bg-cyan-600 text-white pt-4 rounded-full">Login</Link></li>
            </>
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
                    <a className="btn btn-ghost text-xl">daisyUI</a>
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

export default NavigationBar;