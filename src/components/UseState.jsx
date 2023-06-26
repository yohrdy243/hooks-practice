import React, { useContext, useState } from "react";
import { Ctx } from "../context/Context";

export default function UseState() {
  const { theme } = useContext(Ctx);
  const [addNumber, setAddNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  function addCounter(addNumber) {
    setCounter((currentCounter) => currentCounter + addNumber);
  }
  function substractCounter(addNumber) {
    setCounter((currentCounter) => currentCounter - addNumber);
  }

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <h1>Use State</h1>
      <h3>{`Contador: ${counter}`}</h3>
      <h3>{`Cantidad a Agregar: ${addNumber}`}</h3>
      <div>
        <label for="number">
          <span>Cantidad a Agregar</span>
          <input
            id="number"
            type="number"
            onChange={({ target }) =>
              setAddNumber(Number.parseInt(target.value))
            }
            value={addNumber}
          />
        </label>
      </div>
      <button onClick={() => addCounter(addNumber)}>Add {addNumber}</button>
      <button onClick={() => substractCounter(addNumber)}>
        Substract {addNumber}
      </button>
    </div>
  );
}
