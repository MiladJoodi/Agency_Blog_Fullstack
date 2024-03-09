"use client"

import Link from "next/link";
import styles from './links.module.css'
import NavLink from "./navLink/navLink";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";
import { auth } from "@/lib/auth";

const links = [
    {
        title: "Homepage",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blog",
        path: "/blog"
    }
]

const Links = ({session}) => {

    const [open, setOpen] = useState(false)


    // TEMPORARY
    const isAdmin = true

    return (

        <div className={styles.container}>

            {/* Desktop Menu */}
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}

                {session?.user ? (
                    <>
                        {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ) :
                    (
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )
                }
            </div>

            {/* Mobile Menu */}
            <Image
                src="/menu.png"
                alt=""
                width={30}
                height={30}
                onClick={() => setOpen((prev) => !prev)}
                className={styles.menuButton}
            />
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}

        </div>

    );
}

export default Links;