import React from 'react';
import { NavBar } from '../nav-bar/nav-bar';
import { SideBar } from '../side-bar/side-bar';
import styles from './navigation-layout.module.scss';

interface NavigationLayoutProps {
    children: React.ReactNode;
    url: string
}

export const NavigationLayout: React.FC<NavigationLayoutProps> = ({ children, url }) => {
    return (
        <div className={styles.navigation_layout_main}>
            <div>
                <NavBar />
                <SideBar url={url} />
            </div>
            <div className={styles.navigation_layout_inner_body}>
                {children}
            </div>
        </div>
    );
};