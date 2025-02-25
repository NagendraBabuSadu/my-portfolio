const Star = ({ extraStyle }) => {
  const randomX = Math.random() * 700 - 120; // Random movement range (-100px to 100px)
  const randomY = Math.random() * 200 - 130;
  const randomDuration = Math.random() * 100 + 1;

  return (
    <div
      className="star"
      style={{
        width: "20px",
        height: "20px",
        position: "absolute",
        clipPath:
          "polygon(50% 0%, 61% 35%, 100% 35%, 68% 57%, 79% 100%, 50% 75%, 21% 100%, 32% 57%, 0% 35%, 39% 35%)",
        background: "yellow",
        left: "-3%",
        top: "10%",
        boxShadow: "0px 0px 20px 2px yellow",
        transform: `translate(${randomX}px, ${randomY}px)`,
        animation: `blink ${randomDuration}s infinite alternate ease-in-out`,
        ...extraStyle,
      }}
    ></div>
  );
};

const StarField = () => {
  const stars = Array.from({ length: 10 }, (_, i) => <Star key={i} />); // Generate 10 stars
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        boxShadow: "0px 0px 20px 2px yellow",
      }}
    >
      {stars}
    </div>
  );
};

export default StarField;
