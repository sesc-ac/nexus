import PageTitle from "@/app/ui/PageTitle";
import React from "react";

export default function GeconLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <PageTitle />
            {children}
        </>
    );
}