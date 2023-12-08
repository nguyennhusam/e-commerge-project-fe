import React from "react";
import Header from "../Components/Header";
import ShopSection from "../Components/homeComponents/ShopSection";
import ContactInfo from "../Components/homeComponents/ContactInfo";
import CalltoActionSection from "../Components/homeComponents/CalltoActionSection";
import Footer from "../Components/Footer";
import HeroSlider from "../Components/homeComponents/HeroSlider";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSlider/>
      <ShopSection />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomePage;
