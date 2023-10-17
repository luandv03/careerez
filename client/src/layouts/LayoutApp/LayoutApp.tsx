import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "./LayoutApp.module.css";

export default function LayoutApp() {
    return (
        <div>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.content}>
                <Outlet />
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
}
