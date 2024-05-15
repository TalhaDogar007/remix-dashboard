import React from 'react';
import { Link } from 'react-router-dom';
import styles from './side-bar.module.scss';

const active_button = `${styles.sidebar_button} ${styles.active}`;
const sidebar_button = `${styles.sidebar_button}`;

interface SideBarProps {
    url: string;
}

export const SideBar: React.FC<SideBarProps> = ({ url }) => {


    return (
        <div className={styles.sidebar_main}>
            <div className={styles.sidebar_logo}>Logo</div>
            <div className={styles.sidebar_buttons_main}>
                <Link to="/" className={url === "/" ? active_button : sidebar_button}>
                    Dashboard
                </Link>
                <Link to="/files" className={url === "/files" ? active_button : sidebar_button}>
                    Files
                </Link>
                <Link to="/settings" className={url === "/settings" ? active_button : sidebar_button}>
                    Settings
                </Link>
            </div>
        </div>
    );
};
