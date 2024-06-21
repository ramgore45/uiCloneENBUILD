import { BiBuilding, BiSolidEditAlt } from "react-icons/bi";
import { BsFillShareFill } from "react-icons/bs";
import { FaRegCirclePlay } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
import { MdAdminPanelSettings, MdOutlineHome } from "react-icons/md";
import { SlGraph } from "react-icons/sl";

export const sideBarData = [
    {
      id: "1",
      icon: <MdOutlineHome/>,
      title: "Home",
    },
    {
      id: "2",
      icon:<FaRegCirclePlay />,
      title: "Stacks",
    },
    {
      id: "3",
      icon:<BiSolidEditAlt />,
      title: "Manage Catalogs",
    },
    {
      id: "4",
      icon:<BsFillShareFill />,
      title: "Build ML",
    },
    {
      id: "5",
      icon:<BiBuilding />,
      title: "Build GenAI",
    },
    {
      id: "6",
      icon:<ImStatsBars />,
      title: "Operations",
    },
    {
      id: "7",
      icon:<SlGraph />,
      title: "Metrics",
    },
    {
      id: "8",
      icon:<MdAdminPanelSettings />,
      title: "Admin",
    },
   
  ];