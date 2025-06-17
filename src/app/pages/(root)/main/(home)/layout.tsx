import TopBar from "@/components/topbar/topbar";
import { PageLoadingProgress } from "@/components/ui/page-loading-progress";
import { setFolders, setIsQuerying } from "@/redux/slice/folder-note";
import { useGetUserFolders } from "@/service/folders/get-user-folders";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
	const { data: folderData, isLoading: isFolderLoading } = useGetUserFolders({ skip: 0, take: 100 });
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIsQuerying(isFolderLoading));
		if (folderData) {
			dispatch(setFolders(folderData.folders));
			dispatch(setIsQuerying(isFolderLoading));
		}
	}, [folderData, dispatch, isFolderLoading]);

	return (
		<>
			<TopBar />
			<PageLoadingProgress loading={isFolderLoading} />
			<div className="">
				<Outlet />
			</div>
		</>
	);
}
