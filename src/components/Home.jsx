import React from "react";

import BannerSection from "./BannerSection";
import HomeProjects from "./HOMEprojects";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <HomeProjects />
      <div className="footer-home" style={{ backgroundColor: "#272121" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
