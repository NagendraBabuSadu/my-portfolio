import img1 from "../assets/img5.jpg";
import profilePhoto from "../assets/profilePhotoWithNoBg.jpg";
import PageBorderLine from "../components/PageBorderLine";

export default function AboutPage() {
  return (
    <div
      className="homePageDiv"
      id="about"
      style={{
        scroll: "smooth",
        position: "relative",
        height: "99vh",
        backgroundColor: "#fd9f12",
        color: "#k77123",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          position: "absolute",
          textAlign: "center",
          top: "30%", // Adjust as needed
          alignItems: "center",
          padding: "20px",
          width: "100%",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p>
            Hi, I’m <br />
            <b
              style={{
                fontSize: "3.8rem",
                WebkitTextStroke: "2px black",
                color: "yellow"
              }}
            >
              Nagendra Babu
            </b>
            ,
            <br />a passionate React Developer with a knack for building
            dynamic, responsive, and high-performance web applications.
          </p>
        </div>
        <div
          className="card"
          style={{ position: "relative", width: "inherit", height: "15rem" }}
        >
          <img src={profilePhoto} alt="" />
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <b>How's it?</b>
          </div>
        </div>
      </div>
    </div>
  );
}
