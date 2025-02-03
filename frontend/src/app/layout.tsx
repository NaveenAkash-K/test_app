import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import Sidebar from "@/components/common/Sidebar";
import NavBar from "@/components/common/NavBar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Test App",
    description: "Bug management system",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="h-screen w-screen flex">
            <Sidebar/>
            <div className="flex-1 h-full overflow-y-auto">
                <NavBar/>
                {children}
            </div>
        </div>
        </body>
        </html>
    );
}
