export default function BoxComponent({children, componentStyle}) {
    console.log("componentStyle", componentStyle);
  return (
    <div>
      <div
        className="squareBox"
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          border: "2px solid blue",
          boxSizing: "border-box",
          boxShadow:  "rgb(0, 1, 1) -5px 9px 2px 5px",
          backgroundColor: "beige",
          borderRadius: "10px",
          fontWeight: "bolder",
          letterSpacing: ".3rem",
          overflow: "hidden",
          minHeight: "100px",

          ...componentStyle,   
        }}
      >{children}</div>
    </div>
  );
}
