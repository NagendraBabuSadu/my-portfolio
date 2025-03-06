import {
  Box,
  color,
  fontSize,
  height,
  margin,
  padding,
  textAlign,
} from "@mui/system";
import BoxComponent from "../components/BoxComponent";
import { MarginTwoTone } from "@mui/icons-material";

export default function SkillsPage() {
  const headlines = [
    {
      title: "Education",
      backgroundColor: "yellow",
      description: {
        type: "",
        descTitle: "M. Tech",
        descData: ["VLSI-ES", "2015-2017"],
      },
    },
    {
      title: "Skills",
      backgroundColor: "#f436c3",
      description: {
        type: "list",
        descData: [
          "React",
          "Javascript",
          "HTML",
          "Redux",
          "Material UI",
          "CSS",
          "Jest",
          "Git",
        ],
      },
    },
    {
      title: "Experience",
      backgroundColor: "green",
      description: {
        type: "",
        descData: [
          "Frontend Developer",
          "2023-2025",
          "Manual Tester",
          "2022-2023",
        ],
      },
    },
  ];

  const projects = [
    "Pumperpal",
    "Employee Onboarding Portal",
    "Best Deals Interiors",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        height: "99vh",
        backgroundColor: "tan",
      }}
    >
      {/* <h3>Skills Page</h3> */}

      {/* Grid Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 2 columns
          gap: "20px",
          width: "80%",
        }}
      >
        {headlines.map((headline, index) => (
          <div
            style={{
              gap: "10px",
              marginBottom: "2rem",
              color: "black",
              margin: "10px",
            }}
            key={index}
          >
            <div
              style={{ marginBottom: "30px", transition: "all 1s ease" }}
              className="box"
            >
              <BoxComponent
                componentStyle={{
                  color: "black",
                  textTransform: "uppercase",
                  alignItems: "center",
                  backgroundColor: `${headline.backgroundColor}`,
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  boxShadow: "rgb(0, 1, 1) 2px 3px 1px 5px",
                  borderRadius: "30px",
                  padding: "0px 10px",
                }}
              >
                <h3
                  style={{
                    fontSize: "2.3rem",
                  }}
                >
                  {headline.title}
                </h3>
              </BoxComponent>
            </div>

            <div>
              {headline.description.type === "list" ? (
                <BoxComponent
                  componentStyle={{
                    display: "flex",
                    padding: "32px 1px 1px 40px",
                    height: "320px",
                    boxShadow: "rgb(0, 1, 1) 2px 3px 1px 5px",
                    color: "black",
                    borderRadius: "30px",
                    alignItems: "top",
                  }}
                >
                  <ul>
                    {headline.description.descData.map((data, index) => (
                      <li
                        key={index}
                        style={
                          {
                            //   listStyleType: "none",
                          }
                        }
                      >
                        {" "}
                        {data}
                      </li>
                    ))}
                  </ul>
                </BoxComponent>
              ) : (
                <BoxComponent
                  componentStyle={{
                    display: "flex",
                    padding: "32px 1px 1px 40px",
                    height: "320px",
                    boxShadow: "rgb(0, 1, 1) 2px 3px 1px 5px",
                    borderRadius: "30px",
                    color: "black",
                    marginBottom: "30px"
                  }}
                >
                  <h3>{headline.description.descTitle}</h3>

                  {headline.description.descData.map((data, index) => (
                    <p
                      key={index}
                      style={{
                        margin: "2px",
                      }}
                    >
                      {data}
                    </p>
                  ))}
                </BoxComponent>
              )}
            </div>
          </div>
        ))}
      </div>
      <div>
        <BoxComponent
          componentStyle={{
            color: "black",
            padding: "0px 20px",
            // backgroundColor: "red",
            fontSize: "2rem", 
            margin: "0px 0px"
          }}
        >
          <h3 style={{textTransform: "uppercase", textAlign: "center", fontSize: "2rem", color: "brown"}} >Projects:</h3>
          {projects.map((title, index) => {
            console.log("projects", projects);
            return (
              <div>
                <ol style={{listStyle: "none"}}>
                 <li>  <span>{index + 1}.</span>{title}</li>
                </ol>
              </div>
            );
          })}
        </BoxComponent>
      </div>
    </div>
  );
}
