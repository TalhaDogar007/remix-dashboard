import styles from './nav-bar.module.scss';

export const NavBar = () => {


    return (
        <div className={styles.navbar_main}>
            <h3 className={styles.navbar_profile_name}>Talha  </h3>
            <div className={styles.navbar_profile_button} >My profile</div>
            <div className={styles.navbar_logout_button} >Logout</div>
        </div>
    );
};
