import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const user = localStorage.getItem("user-username");
    const navigate = useNavigate();
    const { signinUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password };

        signinUser(user);


    }

    if (user) {
        return navigate("/");
    }


    if (!user) {
        return (
            <div>
                <form onSubmit={handleRegister} className="flex flex-col items-center justify-center m-5 gap-5">
                    <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" required name="email" />
                    <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" required name="password" />
                    <button type="submit" className="bg-black text-white p-3 hover:rounded-lg transition delay-700">Login</button>
                </form>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
        );
    }

};

export default Signin;