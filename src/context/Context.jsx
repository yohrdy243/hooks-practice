import { createContext, useState } from "react";

export const Ctx = createContext("light");

export default function AppContext({ children }) {
  const [theme, setTheme] = useState("light");

  function switchTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <>
      <h3>Use Context</h3>
      <Ctx.Provider value={{ theme, switchTheme }}>{children}</Ctx.Provider>;
    </>
  );
}
