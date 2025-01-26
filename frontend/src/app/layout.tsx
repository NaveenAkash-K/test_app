// RootLayout.tsx
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import SidebarLayout from "@/components/SidebarLayout";

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
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SidebarLayout>{children}</SidebarLayout>
        </body>
        </html>
    );
}
