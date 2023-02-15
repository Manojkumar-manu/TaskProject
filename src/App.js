import React from "react";
import Expect from "./components/expectPage/Expect";
import Footer from "./components/footer/Footer";
import Gallery from "./components/galleryPage/Gallery";
import LightHouseImg from "./components/homePage/LightHouseImg";
import Comp_1 from "./src/Comp_1/Comp_1";
import Comp_2 from "./src/Comp_2/Comp_2";
import Comp_3 from "./components/Comp_3/Comp_3";

import "./Global.css";
import Comp2 from "./components/Comp_2/Comp2";

const App = () => {
  return (
    <div>
      <LightHouseImg />
      <Expect />
      <Gallery />
      <Comp_3 />
      <Comp_1 />
      {/* <Comp_2 /> */}
      <Comp2/>
      <Footer />
    </div>
  );
};

export default App;
