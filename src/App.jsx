import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import HeaderComponent from "./component/common/header/header.component";
import FooterComponent from "./component/common/footer/footer.component";
import ProjectComponent from "./component/home/project/project.component";
import HeroComponent from "./component/home/hero/hero.component";
const App = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <HeaderComponent />
      <HeroComponent />
      <ProjectComponent />
      <FooterComponent />
    </>
  );
};

export default App;
