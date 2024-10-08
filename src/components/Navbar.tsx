import Link from "next/link"
import styles from "../styles/Navbar.module.css"

export const Navbar = () =>{
    return (
        <nav className={styles.container}>
            <Link href="/">Home</Link>
        </nav>
    )
}