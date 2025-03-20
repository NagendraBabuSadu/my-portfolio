"use client";

import { Provider } from "react-redux";
import AboutComponent from "./about/page";
import ContactComponent from "./contact/page";
import HomeComponent from "./HomeComponent";
import PortfolioComponent from "./portfolio/page";
import ServicesComponent from "./services/page";
import store from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex flex-col items-center justify-items-center min-h-screen p-1 pb-1 gap-16 sm:p-1 font-[family-name:var(--font-geist-sans)]">
        <section
          id="home"
          className="w-full min-h-screen flex items-center justify-center mouse-scroll"
        >
          <HomeComponent />
        </section>
        <section id="about">
          <AboutComponent />
        </section>
        <section id="services">
          <ServicesComponent />
        </section>
        <section id="portfolio">
          <PortfolioComponent />
        </section>
        <section id="contact" className="w-full min-h-screen mouse-scroll">
          <ContactComponent />
        </section>
      </div>
    </Provider>
  );
}
