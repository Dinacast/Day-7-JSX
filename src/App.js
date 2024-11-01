import "./styles.css";

export default function App() {
  const className = "App";
  const handleClick = (e) => {
    console.log("cuakz!");
  };
  const title = "Hello World";
  const description = "Start editing to see some magic happen!";
  return (
    <div className={className}>
      <h1 style={{ color: "red", textAlign: "right" }}>{title}</h1>
      <h2>{description}</h2>
      <button onClick={handleClick}>Click Here!</button>
    </div>
  );
}
