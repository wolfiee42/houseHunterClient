import { useContext } from "react";
import  { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../Provider/AuthProvider";


const Signup = () => {

    const { signupUser } = useContext(AuthContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { username, email, password };

        signupUser(user)
    }



    return (
        <div>
            <form onSubmit={handleRegister} className="flex flex-col items-center justify-center m-5 gap-5">
                <input type="text" placeholder="UserName" className="border-2 p-3" name="username" />
                <input type="email" placeholder="Email" className="border-2 p-3" name="email" />
                <input type="password" placeholder="Password" className="border-2 p-3" name="password" />
                <button type="submit" className="bg-black text-white p-3 hover:rounded-lg transition delay-700">Register</button>
            </form>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Signup;