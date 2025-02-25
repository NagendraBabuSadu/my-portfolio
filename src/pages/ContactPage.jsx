import img1 from "../assets/img4.jpg";
import BoxComponent from "../components/BoxComponent";
import PageBorderLine from "../components/PageBorderLine";
import { Rotate90DegreesCcw, RotateLeft } from "@mui/icons-material";
import StarField from "../components/StarComponent";
import CircleComponent from "../components/CircleComponent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import DownloadIcon from "@mui/icons-material/Download";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";

import Button from "@mui/material/Button";
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function ContactPage() {
  const phoneNumber = "+91 630-510-9126";
  return (
    <div
      className="contactPageDiv"
      style={{
        scroll: "smooth",
        backgroundColor: "#ffe89b",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          border: "3px solid brown",
          borderRadius: "20px",
          boxShadow: "#123123 0px 3px 3px 2px",
        }}
      >
        <h3>
          <div
            className="phoneNumber"
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "2rem",
              transition: "all 1s ease",
            }}
          >
            <a
              href="tel:+916305109126"
              style={{
                fontSize: "30px",
                textDecoration: "none",
              }}
            >
              <LocalPhoneIcon />
              +91 630-510-9126
            </a>
          </div>
        </h3>
        <h3>
          <div
            className="url"
            style={{
              display: "flex",
              alignItems: "center",
              transition: "all 1s ease",
              color: "navy",
            }}
          >
            <LanguageIcon />
            <a href="https://nagendra-babu-sadu.netlify.app/">
              nagendrababusadu
            </a>
          </div>
        </h3>
        <div
          style={{
            fontSize: "2rem",
            position: "relative",
          }}
        >
          <a href="./Nagendra-Babu-Sadu.pdf" download="MyResume.Pdf">
            <Button
              variant="contained"
              style={{
                width: "200px",
                fontSize: "20px",
                marginBottom: "8px",
                gap: "10px",
                justifyContent: "center"
              }}
            >
              Resume 
              <DownloadIcon />
            </Button>
          </a>
        </div>
      </div>
      <div className="bgImg" id="contact" style={{ position: "relative" }}>
        <div className="topDiv">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "83vh",
              justifyContent: "space-evenly",
            }}
          >
            <BoxComponent
              componentStyle={{
                position: "absolute",
                top: "45%",
                width: "30%",
                left: "20%",
                transform: "translate(-20%, -40%)",
                textAlign: "center",
                height: "60%",
                boxShadow: "#1f1f1f 0px 25px 0px 0px",
                borderRadius: "50px 50px",
                border: "2px solid violet",
              }}
              className="shadow-box"
            >
              <div style={{ position: "relative", paddingTop: "20px" }}>
                <h3
                  style={{
                    color: "#ff50c2",
                    textTransform: "uppercase",
                    WebkitTextStroke: "1px black",
                    fontSize: "3.3rem",
                    paddingBottom: "50px",
                  }}
                >
                  Ready to work with me ?
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "black",
                    textAlign: "center",
                    padding: "0px 2px",
                    fontStyle: "italic",
                  }}
                >
                  Let's embark on a journey together, where art meets purpose
                  and imagination knows no limits.{" "}
                </p>
              </div>
            </BoxComponent>
            <BoxComponent
              componentStyle={{
                position: "absolute",
                width: "30%",
                top: "30%",
                right: "20%",
                transform: "translate(0%, 0%)",
                textAlign: "center",
                height: "40%",
                boxShadow: "#1f1f1f 0px 25px 0px 0px",
                borderRadius: " 50px 50px",
                border: "2px solid violet",
                overflow: "hidden",
              }}
            >
              <div
                className="night-sky"
                style={{
                  backgroundColor: "#1d2653",
                  height: "18vh",
                  // height: "inherit",
                  position: "relative",
                }}
              >
                <div>
                  <StarField
                    extraStyle={{
                      top: "10%",
                      left: "0%",
                      position: "relative",
                    }}
                  />
                  <StarField 
                  className ="starfield" 
                    extraStyle={{
                      top: "40%",
                      left: "-18%"
                    }} 
                  />
                  <CircleComponent
                    extraStyle={{
                      top: "70%",
                      left: "70%",
                      position: "absolute",
                    }}
                  />
                </div>
                <div
                  className="moon"
                  style={{
                    content: "moon",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: "0px solid black",
                    backgroundColor: "wheat",
                    left: "36%",
                    top: "20%",
                    boxShadow: "0px 0px 50px 5px yellow",
                    rotate: "63deg",
                    position: "absolute",
                    // boxShadow: "0px 0px 10px white",
                  }}
                ></div>
                <CircleComponent
                  extraStyle={{
                    top: "10%",
                    left: "10%",
                    position: "absolute",
                  }}
                />

                <CircleComponent
                  extraStyle={{
                    top: "10%",
                    left: "80%",
                    position: "absolute",
                  }}
                />

                <CircleComponent
                  extraStyle={{
                    position: "absolute",
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    position: "absolute",
                    height: "2px",
                    border: "4px solid ",
                    borderImage:
                      "linear-gradient(45deg,rgb(214, 201, 8),rgb(226, 255, 121)) 1",
                    top: "50%",
                    width: "100%",
                  }}
                ></div>

                <div
                  className="outer-circle"
                  style={{
                    position: "absolute",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    border: "3px solid black",
                    left: "20%",
                    transform: "translate(-90%, -80%)",
                    backgroundColor: "yellow",
                  }}
                >
                  <div
                    className="inner-circle"
                    style={{
                      position: "absolute",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      border: "3px solid black",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "navy",
                    display: "flex",
                    marginTop: "40px",
                  }}
                >
                  Join me as we bring your ideas to life and create visual magic
                  that leaves a lasting impression.
                </p>
              </div>
            </BoxComponent>
          </div>
        </div>
      </div>
      {/* hi */}
    </div>
  );
}
