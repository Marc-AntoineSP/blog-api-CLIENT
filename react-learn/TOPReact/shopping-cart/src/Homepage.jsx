import { Outlet } from "react-router-dom";
import styles from "./styles/layout.module.css";

export default function Homepage(){
    return(
        <>
            <nav><ul className={styles.ul}>
                <li>logo</li>
                <li>Home</li>
                <li>Cart</li>
            </ul></nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <ul className={styles.ul}>
                    <li>@blabla</li>
                    <li>contacts</li>
                    <li>2025</li>
                </ul>
            </footer>
        </>
    )
}