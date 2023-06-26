import { useContext } from "react";
import { Ctx } from "../context/Context";

export default function Header() {
  const { switchTheme } = useContext(Ctx);
  return (
    <div
      style={{
        width: "100%",
        border: "2px",
        borderColor: "black",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "cyan",
        padding: "10px",
      }}
    >
      <h3>Navbar</h3>
      <button onClick={() => switchTheme()}>Cambiar Tema</button>
    </div>
  );
}
