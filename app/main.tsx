import { useLocation } from 'react-router-dom';

// import navigation and scss
import { NavigationLayout } from "./components/navigation-layout/navigation-layout";
import "./main.module.scss";


export const Main = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <NavigationLayout url={currentUrl}>
      {children}
    </NavigationLayout>
  );
};
