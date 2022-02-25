import React from "react";
import {
  WelcomeComponent,
  ArticlesComponent,
  ContactComponent,
} from "../../Components";
import { AboutComponent } from "../../Components";

const Home = () => {
  return (
    <div className="bg-[#142534]">
      <WelcomeComponent />
      <AboutComponent />
      <ArticlesComponent />
      <ContactComponent />
    </div>
  );
};

export default Home;
