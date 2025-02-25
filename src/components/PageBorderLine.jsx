export default function PageBorderLine({ children, borderImage }) {
  return (
    <div
      className="borderLine"
      style={{

        border: "5px solid",
        width: "100%",
        display: { xs: "none", md: "flex" },
        borderImage: borderImage || "linear-gradient(45deg,rgb(52, 184, 118),rgb(187, 231, 25)) 1",
        borderImageSlice: 1,
      }}
    ></div>
  );
}
