import styles from "./Footer.module.css";

import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandYoutube,
} from "@tabler/icons-react";

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.information}>
                <div>
                    <h1>Thông tin liên hệ</h1>
                    <div className={styles.address}>
                        <p>Địa chỉ: 91 Chùa Láng, Đống Đa, Hà Nội</p>
                        <p>Điện thoại: 0932486166</p>
                    </div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.divide}></div>
                    <h1>careerez.edu@gmail.com</h1>
                    <div className={styles.socialMedia}>
                        <ul className={styles.socialMediaList}>
                            <li>
                                <a
                                    href="https://www.facebook.com/careerez"
                                    target="_blank"
                                >
                                    <IconBrandFacebook />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/us.studyez"
                                    target="_blank"
                                >
                                    <IconBrandInstagram />
                                </a>
                            </li>
                            <li>
                                <IconBrandYoutube />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.brand}>
                <div className={styles.logo}>
                    <img
                        src="https://static.wixstatic.com/media/c86370_86d29cfeaed8486ca1621d60382cac78~mv2.png/v1/fill/w_470,h_495,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c86370_86d29cfeaed8486ca1621d60382cac78~mv2.png"
                        alt="logo_careerez"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};
