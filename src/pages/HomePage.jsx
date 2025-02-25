import img1 from "../assets/img4.jpg";
import BoxComponent from "../components/BoxComponent";
import { borderRadius, color, display, fontSize, height } from "@mui/system";
import PageBorderLine from "../components/PageBorderLine";
import img3 from "../assets/img3.jpg";

export default function HomePage() {
  return (
    <div className="homePageDiv" style={{ scrollBehavior: "smooth" }}>
      <div className="bgImg" id="home" style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            backgroundColor: "wheat",
            gap: "10px",
            height: "99vh",
          }}
        >
          <BoxComponent
            componentStyle={{
              height: "40%",
              position: "absolute",
              top: "48%",
              width: "40%",
              left: "20%",
              transform: "translate(-20%, -40%)",
              WebkitTextStroke: "1px black",
              textTransform: "uppercase",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "relative" }}>
              <h3
                style={{
                  color: "green",
                  margin: "2px 0",
                  fontSize: "4rem",
                }}
              >
                Frontend
              </h3>
              <h3
                style={{
                  color: "yellow",
                  margin: "0 0",
                  fontSize: "4rem",
                }}
              >
                Developer
              </h3>
              <h3
                style={{
                  color: "#1051c2",
                  margin: "0 0",
                  fontSize: "4rem",
                }}
              >
                Portfolio
              </h3>
            </div>
          </BoxComponent>
          <BoxComponent
            componentStyle={{
              position: "absolute",
              top: "45%",
              width: "20%",
              transform: "translate(-20%, -40%)",
              WebkitTextStroke: "2px black",
              textTransform: "uppercase",
              height: "50%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="door">
              {/* <img src={img1} alt="" /> */}
              <div class="browser-window">
                <h3
                  style={{
                    textAlign: "center",
                    WebkitTextStroke: "1px solid",
                    color: "black",
                  }}
                >
                  Hover Me
                </h3>
                <div class="top-bar">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot blue"></span>
                </div>
                <div class="content">
                  <div class="sky"></div>
                  <div class="sun"></div>
                  <div class="building">
                    <div class="roof"></div>
                    <div class="walls">
                      <div class="window pink"></div>
                      <div class="window blue"></div>
                      <div class="window yellow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BoxComponent>
        </div>
      </div>
    </div>
  );
}
