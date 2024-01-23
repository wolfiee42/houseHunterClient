/* eslint-disable react/prop-types */
import { createContext } from "react";
import useAxiosPublic from "../Components/useAxiosPublic";
import toast from "react-hot-toast";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const axiosPublic = useAxiosPublic();
    const signupUser = user => {
        axiosPublic.post("/userregistration", user)
            .then(res => {
                if (res.data.userId && res.data.message) {
                    const userEmail = user;
                    axiosPublic.post('/jwt', userEmail)
                        .then(res => {
                            if (res.data.token && res.data.userEmail) {
                                localStorage.setItem("Access-token", res.data.token);
                                localStorage.setItem("user-email", userEmail.email);
                                localStorage.setItem("user-username", userEmail.username);
                                return toast.success("User Created Successfully!");
                            }
                        });
                }
                else if (res.data.message) {
                    return toast.error(res.data.message);
                }
            })
    }

    const signinUser = user => {
        axiosPublic.post('/userlogin', user)
            .then(res => {
                console.log(res.data);

                if (res.data.user) {
                    const userEmail = user;
                    const username = res.data.user.username;
                    console.log(username);
                    axiosPublic.post('/jwt', userEmail)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.token && res.data.userEmail) {
                                localStorage.setItem("Access-token", res.data.token);
                                localStorage.setItem("user-username", username);
                                localStorage.setItem("user-email", res.data.userEmail.email);
                                return toast.success("User logged in Successfully!");
                            }
                        });
                }
                if (res.data.error) {
                    toast.error(res.data.error)
                }
            })
    }



    const authinfo = { signupUser, signinUser }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;