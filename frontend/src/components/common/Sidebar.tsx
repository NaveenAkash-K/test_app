"use client"

import {FaRegUser} from "react-icons/fa";
import useNavigationStore from "@/store/useNavigationStore";
import SidebarDropdown from "@/components/common/SidebarDropdown";
import {MdOutlineFeedback} from "react-icons/md";
import {usePathname} from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    const showSidebar = !pathname.startsWith("/auth");
    const {isOpen} = useNavigationStore();

    return (showSidebar && <div
        className={`h-full border-r bg-sidebar-backgroundColor border-borderColor box-border flex flex-col justify-between ${
            isOpen ? "w-80" : "w-[4.25rem]"
        }`}
    >
        <div className={`flex-grow`}>
            <div
                className={`flex items-center rounded-lg hover:bg-cardBackgroundColor cursor-pointer ${
                    isOpen ? "gap-4 m-4 p-4" : "gap-0 m-3 p-3"
                }`}
            >
                <FaRegUser size={`${isOpen ? 24 : 20}`}/>
                <p
                    className={`font-semibold text-sm transition-all duration-300 ${
                        isOpen ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
                    } overflow-hidden whitespace-nowrap`}
                >
                    Naveen Akash
                </p>
            </div>

            <div className={`mr-2 overflow-x-hidden max-h-[calc(100vh-170px)]`}>
                <SidebarDropdown/>
                <SidebarDropdown/>
            </div>
        </div>

        <div
            className={`p-2 mb-8 flex rounded-lg hover:bg-cardBackgroundColor ml-3 mr-3 cursor-pointer ${isOpen ? "gap-2" : "gap-0"}`}>
            <MdOutlineFeedback size={24}
                               filter={"invert(60%) sepia(51%) saturate(0%) hue-rotate(254deg) brightness(97%) contrast(88%)"}/>
            <p className={`text-secondaryTextColor text-sm transition-all duration-300 ${
                isOpen ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
            } overflow-hidden whitespace-nowrap`}>Feedback</p>
        </div>
    </div>)
};

export default Sidebar;
