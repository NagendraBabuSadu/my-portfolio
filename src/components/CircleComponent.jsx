const CircleComponent = ({ extraStyle }) => {
  return (
    <div
      className="star"
      style={{
        width: "20px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "50% 50%",
        position: "relative",
        background: "yellow",
        transform: "scale(0.4)",
        boxShadow: "0px 0px 10px white",
        ...extraStyle,
      }}
    ></div>
  );
};

export default CircleComponent;
