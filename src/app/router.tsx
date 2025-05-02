import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/components/layouts/main-layout";
import { useMemo } from "react";
import Login from "./pages/auth/login";
import AuthRoot from "./pages/auth/root";
import Signup from "./pages/auth/signup";
import AppRoot from "./pages/root";
import HomeLayout from "./pages/home";
import Home from "./pages/home/home";
import AllNotes from "./pages/home/all-notes";
import Folders from "./pages/home/folders";
import NoteEditor from "./pages/note";
// import AuthGuard from "@/components/auth/auth-guard";


const createAppRouter = () =>
    createBrowserRouter([
        {
            path: "/auth",
            element: <AuthRoot />,
            children: [
                {
                    index: true,
                    path: "login",
                    element: <Login />
                },
                {
                    path: "signup",
                    element: <Signup />
                },
            ]
        },
        {
            path: "/",
            element: <AppRoot />,
            children: [
                {
                    element: <MainLayout />,
                    children : [
                        {
                            element: <HomeLayout/>, // with top bar
                            children : [
                                {
                                    index: true,
                                    element: <Home/>
                                },
                                {
                                    path: "all-notes",
                                    element: <AllNotes/>
                                },
                                {
                                    path: "folders",
                                    element: <Folders/>
                                }
                            ]
                        },
                        {
                            path: "/:noteId",
                            element: <NoteEditor/>
                        }
                    ]
                }
            ]
        }
    ])


export const AppRouter = () => {
    const router = useMemo(() => createAppRouter(), []);


    return <RouterProvider  router={router}/>
}
