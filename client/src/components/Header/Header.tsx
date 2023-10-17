import { Link } from "react-router-dom";
import { IconUserCircle } from "@tabler/icons-react";

import styles from "./Header.module.css";

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
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
                        <h2>CareerEZ</h2>
                        <p>Your path to success</p>
                    </div>
                </div>
                <div className={styles.authentication}>
                    <div className={styles.signup}>
                        <Link to="/">
                            <button>
                                <h4>Đăng ký</h4>
                            </button>
                        </Link>
                    </div>
                    <div className={styles.signin}>
                        <Link to="/signin">
                            <IconUserCircle size="40px" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">
                            <h4>Trang chủ</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <h4>Về CareerEZ</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <h4>Bài kiểm tra tính cách</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <h4>Trải nghiệm nghề nghiệp</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <h4>Thực tập trực tuyến</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <h4>Đăng ký thành viên</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <h4>FAQS</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
