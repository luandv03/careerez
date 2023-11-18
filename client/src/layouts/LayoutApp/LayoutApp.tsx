import { Outlet } from "react-router-dom";
import { Button } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowBigUp } from "@tabler/icons-react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "./LayoutApp.module.css";

export default function LayoutApp() {
    const [scroll, scrollTo] = useWindowScroll();

    const handleGoToTop = () => {
        scrollTo({ x: 0, y: 0 });
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.content}>
                <Outlet />
            </div>
            <footer className={styles.footer}>
                <Footer />
            </footer>

            <Button
                bg="rgb(40, 89, 182)"
                style={{
                    position: "fixed",
                    right: "24px",
                    bottom: "100px",
                    display: scroll.y > 600 ? "flex" : "none",
                }}
                onClick={() => handleGoToTop()}
            >
                <IconArrowBigUp />
            </Button>
        </div>
    );
}
