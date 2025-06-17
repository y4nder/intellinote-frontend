import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/app/pages/(root)/main/layout";
import { lazy, useMemo } from "react";
import { ToastContainer } from "react-toastify";
import { SlideDownBlur } from "@/lib/utils";
import AuthRoot from "./pages/auth";
import AppRoot from "./pages/(root)";
import RecycleBinPage from "./pages/(root)/main/(home)/recycle-bin";

const Login = lazy(() => import("./pages/auth/sign-in"));
const Signup = lazy(() => import("./pages/auth/sign-up"));
const Home = lazy(() => import("./pages/(root)/main/(home)/index/index"));
const HomeLayout = lazy(() => import("./pages/(root)/main/(home)/layout"));
const AllNotes = lazy(() => import("./pages/(root)/main/(home)/index/all-notes"));
const Folders = lazy(() => import("./pages/(root)/main/(home)/index/all-folders"));
const NoteEditor = lazy(() => import("./pages/(root)/main/note"));
const Folder = lazy(() => import("./pages/(root)/main/(home)/folder"));
const SmartViewsPage = lazy(() => import("./pages/(root)/main/(home)/smart-views"));
const ViewPage = lazy(() => import("./pages/(root)/main/(home)/smart-views/view-page"));

const createAppRouter = () =>
	createBrowserRouter([
		{
			path: "/auth",
			element: <AuthRoot />,
			children: [
				{
					index: true,
					path: "login",
					element: <Login />,
				},
				{
					path: "signup",
					element: <Signup />,
				},
			],
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
							element: <HomeLayout />,
							children: [
								{
									index: true,
									element: <Home />,
								},
								{
									path: "folder/:folderId",
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
									element: <SmartViewsPage />,
								},
								{
									path: "view/:viewId",
									element: <ViewPage />,
								},
								{
									path: "recycled",
									element: <RecycleBinPage />,
								},
							],
						},
						{
							path: "note/:noteId/:blockId?",
							element: <NoteEditor />,
						},
					],
				},
			],
		},
	]);

export const AppRouter = () => {
	const router = useMemo(() => createAppRouter(), []);
	return <RouterProvider router={router} />;
};
