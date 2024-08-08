import { routerType } from "../types/router.types";
//import About from "./About/About";
import Roms from "./Roms/Roms";
import Kernels from "./Kernels/Kernels";
import Recovery from "./Recovery/Recovery";
import Landing from "./Landing/Landing";
import RUI3Firmware from "./Firmware/RealmeUI3/RealmeUI3";

const pagesData: routerType[] = [
    /*{
        path: "About",
        element: <About />,
        title: "about"
    },*/
    {
        path: "Roms",
        element: <Roms />,
        title: "Roms",
        visible: true
    },
    {
        path: "Kernels",
        element: <Kernels />,
        title: "Kernels",
        visible: true
    },
    {
        path: "Recoveries",
        element: <Recovery />,
        title: "Recoveries",
        visible: true
    },
    {
        path: "RUI3",
        element: <RUI3Firmware />,
        title: "RealmeUI3",
        visible: true
    },
    {
        path: "Landing",
        element: <Landing />,
        title: "Landing",
        visible: false
    }
];

export default pagesData;