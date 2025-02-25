import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiNoodles } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";
import { IoRestaurant } from "react-icons/io5";
import { TbSoupFilled } from "react-icons/tb";



export const categories = [
    {
        id: 1,
        name: "All",
        icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />

    },
    {
        id: 2,
        name: "Breakfast",
        icon: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />

    },
    {
        id: 3,
        name: "Chinese",
        icon: <GiNoodles className="w-[60px] h-[60px] text-green-600" />

    },
    {
        id: 4,
        name: "Pizza",
        icon: <FaPizzaSlice className="w-[60px] h-[60px] text-green-600" />

    },
    {
        id: 5,
        name: "Burger",
        icon: <GiHamburger className="w-[60px] h-[60px] text-green-600" />

    },
    {
        id: 6,
        name: "Main Course",
        icon: <IoRestaurant 
        className="w-[60px] h-[60px] text-green-600" />

    },
    {
        id: 7,
        name: "Soups",
        icon: <TbSoupFilled className="w-[60px] h-[60px] text-green-600" />

    },
]