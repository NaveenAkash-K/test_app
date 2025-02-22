import Image from "next/image";
import googleIcon from "../../../../public/logo/google.webp";
import teamsIcon from "../../../../public/logo/microsoft-teams.webp";
import Link from "next/link";

export default function Login() {
    return (
        <div className="w-full h-full flex">
            <div style={{backgroundColor: "#12006C"}}
                 className={"h-[calc(100vh-2rem)] rounded-xl w-40 flex-grow m-4 pt-16 pl-10 pr-14"}>
                <p style={{letterSpacing: "0.2rem"}} className={"text-xl"}>BUG TRACK</p>
                <p className={"text-5xl font-semibold mt-10"}>Start your journey with us.</p>
                <p style={{color: "#6043f1", lineHeight: "1.5rem"}} className={"text-lg mt-6"}>Your ideal Bug Tracking
                    Solution. Lorem Ipsum
                    Lorem Lorem Ipsum Lorem. Your ideal Bug Tracking
                    Solution. Lorem Ipsum Lorem Lorem Ipsum Lorem. </p>
            </div>
            <div className={"h-screen w-40 flex-[3] flex justify-center items-center ml-5 mr-10"}>
                <div className={"pl-7 pr-7 pt-6 pb-6 w-[30rem] rounded-lg border border-borderColor"}>
                    <p className={"font-bold text-2xl"}>Login</p>
                    <p className={"text-secondaryTextColor mt-1"}>Enter your email below to login to your account</p>
                    <div className={"mt-4"}>
                        <p className={"font-semibold mb-2"}>Email</p>
                        <input
                            placeholder={"youname@example.com"}
                            className={"w-full text-sm bg-transparent border border-borderColor rounded-lg p-2 focus:outline-0 focus:border-primaryColor"}/>
                    </div>
                    <div className={"mt-4"}>
                        <div className={"flex justify-between"}>
                            <p className={"font-semibold mb-2"}>Password</p>
                            <p className={"text-secondaryTextColor mb-2 cursor-pointer"}>Forget Password?</p>
                        </div>
                        <input
                            placeholder={"• • • • • • • •"}
                            className={"w-full text-sm bg-transparent border border-borderColor rounded-lg p-2 focus:outline-0 focus:border-primaryColor"}/>
                    </div>
                    <button className={"w-full bg-primaryColor rounded-lg p-3 mt-5 text-sm font-semibold cursor-pointer"}>Login
                    </button>
                    <Link href={"/auth/signup"}><p className={"text-center mt-4 text-secondaryTextColor"}>New user?
                        Signup</p></Link>
                    <hr style={{backgroundColor: "#1F2937", height: "2px", border: "none"}} className="mt-4 mb-3"/>
                    <div className={"flex gap-4"}>
                        <div
                            className={"w-full flex justify-center border border-borderColor rounded-lg items-center pt-2 pb-2 hover:bg-cardBackgroundColor cursor-pointer"}>
                            <p>Continue with Google</p>
                            <Image src={googleIcon} width={35} height={35} alt={"googleIcon"}/>
                        </div>
                        <div
                            className={"w-full flex justify-center border border-borderColor rounded-lg items-center pt-2 pb-2 hover:bg-cardBackgroundColor cursor-pointer"}>
                            <p>Continue with Teams</p>
                            <Image src={teamsIcon} width={35} height={35} alt={"teamsIcon"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
