import { Navigate, Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import pagesData from "./pagesData";
import MainLayout from "./Layout/MainLayout";
import NotFoundPage from "./404/404.tsx";

const Router = () => {
    const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return (
        <Routes>
            <Route element={<MainLayout />} path="/">
                <Route index element={<Navigate to="/Roms" replace />} />
                {pageRoutes}
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default Router;