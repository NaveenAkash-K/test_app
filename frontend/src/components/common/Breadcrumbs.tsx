import {IoIosArrowForward} from "react-icons/io";
import Link from "next/link";

const Breadcrumbs = () => {
    return (
        <div className="flex items-center gap-3 text-secondaryTextColor last:text-white">
            <Link href={"/auth/login"} className="text-secondaryTextColor text-sm">Home</Link>
            <IoIosArrowForward
                filter={"invert(60%) sepia(51%) saturate(0%) hue-rotate(254deg) brightness(97%) contrast(88%)"}/>
            <Link href={"/auth/login"} className="text-secondaryTextColor text-sm">Product</Link>
            <IoIosArrowForward
                filter={"invert(60%) sepia(51%) saturate(0%) hue-rotate(254deg) brightness(97%) contrast(88%)"}/>
            <Link href={"/auth/login"} className="text-secondaryTextColor text-sm">Team</Link>
        </div>
    );
};

export default Breadcrumbs;
