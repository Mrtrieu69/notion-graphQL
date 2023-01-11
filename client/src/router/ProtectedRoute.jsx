import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const navigate = useNavigate();

    if (!localStorage.getItem("accessToken")) {
        navigate("/login");
        return;
    }

    return <Outlet />;
};

export default ProtectedRoute;
