import PageBorderLine from "../components/PageBorderLine";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import CustomScrollbar from "../CustomScrollbar";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import SkillsPage from "./SkillsPage";

export default function MainPage() {
  return (
    <div className="container" style={{
      margin: "0px 300px"
    }}>

        <ResponsiveAppBar />
        <div id="home" style={{ scrollBehavior: "smooth" }}>
          <HomePage />
          <PageBorderLine borderImage="linear-gradient(90deg, rgb(255, 0, 0), rgb(0, 0, 255)) 1" />
        </div>
        <div id="about" style={{ scrollBehavior: "smooth" }}>
          <AboutPage />
          <PageBorderLine borderImage="linear-gradient(135deg, rgb(128, 0, 117), rgb(222, 247, 0)) 1" />
        </div>

        <div className="skills" id="skills">
          <SkillsPage />
          <PageBorderLine borderImage="linear-gradient(135deg, rgb(168, 245, 144), rgb(170, 38, 38)) 1" />
        </div>

        <div className="contact" id="contact">
          <ContactPage />
          <PageBorderLine borderImage="linear-gradient(135deg, rgb(24, 77, 8), rgb(170, 38, 38)) 1" />
        </div>

    </div>
  );
}
