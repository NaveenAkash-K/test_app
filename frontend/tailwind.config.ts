import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                backgroundColor: "var(--background-color)",
                // foreground: "var(--foreground)",
                primaryColor: "var(--primary)",
                borderColor: "var(--borderColor)",
                white: "var(--white)",
                cardBackgroundColor: "var(--cardBackground)",
                secondaryTextColor: "var(--secondaryText)",
                chip: {
                    activeBackgroundColor: "var(--activeChipBackground)",
                    activeTextColor: "var(--activeChipText)"
                },
                sidebar: {
                    backgroundColor: "var(--sidebarBackground)"
                }
            },
        },
    },
    plugins: [],
} satisfies Config;
