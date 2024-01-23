import { useContext, useState } from "react";
import { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Signup = () => {

    const [designation, setDesignation] = useState();

    const user = localStorage.getItem("user-username");
    const navigate = useNavigate();
    const { signupUser } = useContext(AuthContext);

    const handleChange = e => {
        setDesignation(e.target.value)
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { username, designation, email, password };

        signupUser(user);

    }


    if (user) {
        return (
            <>{navigate("/")}
                window.location.reload();</>
        )
    }


    if (!user) {
        return (
            <div>
                <form onSubmit={handleRegister} className="flex flex-col items-center justify-center m-5 gap-5">
                    <input type="text" placeholder="UserName" className="input input-bordered w-full max-w-xs" name="username" required />
                    <select value={designation} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select Designation</option>
                        <option value={"House Owner"}>House Owner</option>
                        <option value={"House Renter"}>House Renter</option>
                    </select>
                    <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" name="email" required />
                    <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" name="password" required />
                    <button type="submit" className="bg-black text-white p-3 hover:rounded-lg transition delay-700">Register</button>
                </form>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
        );
    }
};

export default Signup;