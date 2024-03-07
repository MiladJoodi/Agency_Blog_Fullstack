"use client"

import Link from "next/link";
import styles from './links.module.css'
import NavLink from "./navLink/navLink";
import { useState } from "react";

const Links = () => {

    const [open, setOpen] = useState(false)


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

    // TEMPORARY
    const session = true
    const isAdmin = true

    return (

        <div className={styles.container}>

            {/* Desktop Menu */}
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}

                {session ? (
                    <>
                        {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) :
                    (
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )
                }
            </div>

            {/* Mobile Menu */}
            <button className={styles.menuButton} onClick={()=>setOpen((prev)=>!prev)}>Menu</button>

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