"use client"
import HeaderAdmin from "@/app/ui/header-admin";
import Footer from "@/app/ui/footer";
import ThemeContext, { UserContext } from "@/app/store/hooks";
import { useState } from "react";
import { Session } from "next-auth";

export function Provider({
    children,
    session
}: {
    children: React.ReactNode,
    session: Session
}) {
    const [theme, setTheme] = useState('dark');
    const changeTheme = (theme: string) => {
        const newTheme = theme;
        setTheme(newTheme);
    }
    const value = theme === 'dark' ? "dark" : 'light';

    // const username
    return (
        <ThemeContext.Provider value={value}>
            <HeaderAdmin session={session} onClick={changeTheme}/>
            {children}
            <Footer/>
        </ThemeContext.Provider>
    )
}