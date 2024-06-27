import { useLocation } from 'react-router-dom';
import {
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

// import navigation and scss
import { NavigationLayout } from "./components/navigation-layout/navigation-layout";
import styles from "./main.module.scss";


export const Main = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const error = useRouteError();



  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
        <button onClick={() => window.location.href = '/'}>
          Dashboard
        </button>
      </div>
    );
  }
  else {
    return (
      <div className={styles.root}>
        <NavigationLayout url={currentUrl}>
          {children}
        </NavigationLayout>
      </div>
    );
  }

};