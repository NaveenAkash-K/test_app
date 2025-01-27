"use client"

import Toggle from "@/components/common/Toggle";
import {useState} from "react";

export default function Login() {
    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <div className="w-full h-full">
            <p className="text-white">Login</p>
            <Toggle isEnabled={toggle}
                    isDisabled={false}
                    onChange={(value) => setToggle(value)}/>
            <div style={{height: "200vh"}}></div>
        </div>
    );
}
