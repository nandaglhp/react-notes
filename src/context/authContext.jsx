import * as React from "react";

import { AxiosError, axios } from "@/libs/axios";

import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const AuthContext = React.createContext({
    user: null,
    token: null,
    signin: async () => {},
    singup: async () => {},
    signout: async () => {},
});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [token, setToken] = useLocalStorage("token", null);

    React.useEffect(() => {
        const profile = async () => {
            try {
                const { data: response } = await axios.get("/users/me");
                setUser(response.data);
            } catch (error) {
                if (error instanceof AxiosError)
                    toast.error(error.response.data.message);
                else toast.error(error.message);
            }
        };

        if (token && !user) profile();
    }, [token, user, setUser]);

    const signin = async ({ email, password }) => {
        const { data: response } = await axios.post("/login", {
            email,
            password,
        });
        const { accessToken } = response.data;
        setToken(accessToken);
    };

    const signup = async ({ name, email, password }) => {
        await axios.post("/register", {
            name,
            email,
            password,
        });
    };

    const signout = () => {
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, signin, signup, signout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
