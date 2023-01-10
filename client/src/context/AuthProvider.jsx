import React from "react";
import { useState, createContext, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribed = auth.onIdTokenChanged((user) => {
            console.log("[From AuthProvider]", { user });
            if (user?.uid) {
                setUser(user);
                if (user.accessToken !== localStorage.getItem("accessToken")) {
                    localStorage.setItem("accessToken", user.accessToken);
                    window.location.reload();
                }
                setIsLoading(false);
                return;
            }

            // reset user info
            console.log("reset");
            setIsLoading(false);
            setUser({});
            localStorage.clear();
            navigate("/login");
        });

        return () => {
            unsubscribed();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {isLoading ? <CircularProgress /> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
