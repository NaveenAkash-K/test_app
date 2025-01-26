import {ReactNode} from "react";

const SidebarLayout = (props: { children: ReactNode }) => {
    return (
        <div className="h-screen w-screen flex">
            <div className="w-80 h-full border-r border-gray-800 box-border">
                <div></div>
            </div>
            <div className="flex-1 h-full overflow-y-auto">
                <div className="sticky top-0 border-gray-800 border-b w-full z-10">
                    <div className="h-12"> </div>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default SidebarLayout;
