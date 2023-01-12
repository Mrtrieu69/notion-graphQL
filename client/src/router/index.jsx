import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";
import NoteList from "../components/NoteList";
import Note from "../components/Note";

const AuthLayout = () => {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    );
};

export default createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            { element: <Login />, path: "/login" },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        element: <Home />,
                        path: "/",
                        loader: async () => {
                            const query = `query Folders {
                                                folders {
                                                id
                                                name
                                                createdAt
                                                }
                                            }`;

                            const data = await fetch("http://localhost:4000/graphql", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                },
                                body: JSON.stringify({ query }),
                            }).then((res) => res.json());
                            return data.data;
                        },
                        children: [
                            {
                                element: <NoteList />,
                                path: "folders/:folderId",
                                children: [
                                    {
                                        element: <Note />,
                                        path: "note/:noteId",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);
