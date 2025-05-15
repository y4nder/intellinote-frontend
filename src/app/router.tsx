import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/components/layouts/main-layout";
import { lazy, useMemo } from "react";
import { ToastContainer } from "react-toastify";
import { SlideDownBlur } from "@/lib/utils";
import AuthRoot from "./pages/auth/root";
import AppRoot from "./pages/root";

const Login = lazy(() => import("./pages/auth/login"));
const Signup = lazy(() => import("./pages/auth/signup"));
const Home = lazy(() => import("./pages/home/home"));
const HomeLayout = lazy(() => import("./pages/home"));
const AllNotes = lazy(() => import("./pages/home/all-notes"));
const Folders = lazy(() => import("./pages/home/folders"));
const NoteEditor = lazy(() => import("./pages/note"));
const Folder = lazy(() => import("./pages/folder"));
const SmartViewsPage = lazy(() => import("./pages/smart-views"));
const ViewPage = lazy(() => import("./pages/smart-views/view-page"));


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
            element: (
              <>
                <ToastContainer transition={SlideDownBlur} />
                <AppRoot />
              </>
            ),
            children: [
              {
                element: <MainLayout />,
                children: [
                  {
                    element: <HomeLayout />, // with top bar
                    children: [
                      {
                        index: true,
                        element: <Home />,
                      },
                      {
                        path: "folder/:folderId", // 💡 Now only handles folders
                        element: <Folder />,
                      },
                      {
                        path: "all-notes",
                        element: <AllNotes />,
                      },
                      {
                        path: "folders",
                        element: <Folders />,
                      },
                      {
                        path: "perspectives",
                        element: <SmartViewsPage/>
                      },
                      {
                        path: "view/:viewId",
                        element: <ViewPage/>
                      }  
                    ],
                  },
                  {
                    path: "note/:noteId/:blockId?", 
                    element: <NoteEditor />,
                  }                  
                ],
              },
            ],
          }          
    ])


export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return (
      <RouterProvider router={router} />
  );
};