import { routerType } from "../types/router.types";
//import About from "./About/About";
import Roms from "./Roms/Roms";
import Kernels from "./Kernels/Kernels";

const pagesData: routerType[] = [
    /*{
        path: "About",
        element: <About />,
        title: "about"
    },*/
    {
        path: "Roms",
        element: <Roms />,
        title: "Roms"
    },
    {
        path: "Kernels",
        element: <Kernels />,
        title: "Kernels"
    }
];

export default pagesData;