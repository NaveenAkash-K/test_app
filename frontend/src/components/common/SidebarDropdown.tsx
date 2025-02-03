"use client";

import {AiOutlineProduct} from "react-icons/ai";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import useNavigationStore from "@/store/useNavigationStore";
import {useEffect, useState} from "react";

const SidebarDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const {isOpen, setIsOpen} = useNavigationStore();

    useEffect(() => {
        if (!isOpen) {
            setIsDropdownOpen(false)
        }
    }, [isOpen]);

    const expandDropdown = () => {
        setIsOpen(true);
        setIsDropdownOpen(prev => !prev);
    }

    return (
        <div>
            {/* Main Dropdown Option */}
            <div
                className={`flex justify-between items-center rounded-lg hover:bg-cardBackgroundColor ${
                    isOpen ? "mr-2 ml-4 mt-1 p-2" : "mr-0 ml-3 mt-1 p-3"
                } mb-0 cursor-pointer`}
                onClick={expandDropdown} // Toggle dropdown on click
            >
                <div className={`flex ${isOpen ? "gap-3" : "gap-0"}`}>
                    <AiOutlineProduct size={`${isOpen ? 22 : 22}`}/>
                    <p
                        className={`text-sm ${
                            isOpen ? "text-opacity-100 max-w-full" : "text-opacity-0 max-w-0"
                        } overflow-hidden whitespace-nowrap`}
                    >
                        Products
                    </p>
                </div>
                <IoIosArrowUp className={`${isDropdownOpen ? "rotate-180" : "rotate-90"}`}/>
                {/*{isDropdownOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}*/}
            </div>

            {/* Dropdown Options */}
            <div
                className={`flex gap-4 transition-all duration-300 ${
                    isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
            >
                <div className={`ml-9 flex-shrink-0 w-[1px] bg-cardBackgroundColor`}/>
                <div
                    className={`flex-grow transition-opacity ${
                        isDropdownOpen ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {/* List of options */}
                    {["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"].map((product, index) => (
                        <p
                            key={index}
                            className={`mr-2 mb-1 rounded-lg p-2 hover:bg-cardBackgroundColor cursor-pointer ${
                                isDropdownOpen ? "text-opacity-100 max-w-full" : "text-opacity-0 max-w-0"
                            } overflow-hidden whitespace-nowrap`}
                        >
                            {product}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidebarDropdown;
