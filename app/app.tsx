import { NavigationLayout } from "./components/navigation-layout/navigation-layout";
import  "./app.module.scss";

import { Home } from "./components/home/home";

export default function App() {
  return <NavigationLayout url="/" >
    <Home />
  </NavigationLayout>;
}