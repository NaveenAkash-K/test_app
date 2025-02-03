"use client"
import {FiSidebar} from "react-icons/fi";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import useNavigationStore from "@/store/useNavigationStore";
import {usePathname} from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();
    const showSidebar = !pathname.startsWith("/auth");
    const {isOpen, setIsOpen} = useNavigationStore();

    const expandSidebar = () => {
        setIsOpen(!isOpen);
    }
    return (showSidebar && <div className="sticky top-0 border-borderColor border-b w-full z-10">
        <div className="flex items-center gap-8 bg-backgroundColor">
            <div
                onClick={expandSidebar}
                className="bg-sidebar-backgroundColor cursor-pointer p-2 border border-borderColor h-fit w-fit rounded-lg m-4 hover:bg-cardBackgroundColor"
            >
                <FiSidebar size={24}/>
            </div>
            <Breadcrumbs/>
        </div>
    </div>)
}

export default NavBar