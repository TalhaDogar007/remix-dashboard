import { NavigationLayout } from "./components/navigation-layout/navigation-layout";
import "./main.module.scss";


export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationLayout url="/">
      {children}
    </NavigationLayout>
  );
};
