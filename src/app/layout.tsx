import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {QueryClientProvider} from "@/components/QueryClientProvider";
import {PropsWithChildren} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Rick and Morty Characters",
    description: "Autocomplete search for Rick and Morty characters",
};

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <QueryClientProvider>
            {children}
        </QueryClientProvider>
        </body>
        </html>
    );
}
