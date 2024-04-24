import { routerType } from "../types/router.types";
import About from "./About/About";
import Roms from "./Roms/roms";

const pagesData: routerType[] = [
    {
        path: "About",
        element: <About />,
        title: "about"
    },
    {
        path: "roms",
        element: <Roms />,
        title: "roms"
    }
];

export default pagesData;