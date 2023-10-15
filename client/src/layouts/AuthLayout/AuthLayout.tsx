import { Link, Outlet } from "react-router-dom";

import styles from "./AuthLayout.module.css";

export const AuthLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.infor}>
                    <div className={styles.avatar}>
                        <Link to="/">
                            <img
                                src="https://static.wixstatic.com/media/c86370_86d29cfeaed8486ca1621d60382cac78~mv2.png/v1/crop/x_48,y_16,w_435,h_441/fill/w_122,h_123,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c86370_86d29cfeaed8486ca1621d60382cac78~mv2.png"
                                alt="logo_careerez"
                                loading="lazy"
                            />
                        </Link>
                    </div>
                    <div className={styles.name}>
                        <Link to="/">
                            <h2>CareerEZ</h2>
                        </Link>
                        <p>Your path to success</p>
                    </div>
                </div>
            </div>
            <div className={styles.authentication}>
                <Outlet />
            </div>
        </div>
    );
};
