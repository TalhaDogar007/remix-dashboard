import { useLocation } from 'react-router-dom';

// import navigation and scss
import { NavigationLayout } from "./components/navigation-layout/navigation-layout";
import styles from "./main.module.scss";


export const Main = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className={styles.root}>
      <NavigationLayout url={currentUrl}>
        {children}
      </NavigationLayout>
    </div>

  );
};
