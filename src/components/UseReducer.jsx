import { useContext, useReducer } from "react";
import { Ctx } from "../context/Context";

function reducer(state, { type, name, value }) {
  switch (type) {
    case "UPDATE_VALUE":
      return {
        ...state,
        [name]: `${value}`.toUpperCase(),
      };

    case "CLEAR_VALUES":
      return inicialValues;
    default:
  }
}

function Field({ type, name, value, handleChange }) {
  return (
    <label style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{name}</span>
      <input
        type={type}
        value={value}
        onChange={({ target }) =>
          handleChange({
            type: "UPDATE_VALUE",
            value: target.value,
            name,
          })
        }
      />
    </label>
  );
}

const inicialValues = {
  firstName: "",
  lastName: "",
  age: 0,
  email: "",
  password: "",
};
export default function UseReducer() {
  const { theme } = useContext(Ctx);

  const [state, dispatch] = useReducer(reducer, inicialValues);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <h1>Use Reducer</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {Object.keys(inicialValues).map((name, index) => (
          <Field
            name={name}
            value={state[name]}
            handleChange={dispatch}
            key={`FIELD_${index}`}
          />
        ))}
        <button onClick={() => dispatch({ type: "CLEAR_VALUES" })}>
          Clear
        </button>
      </div>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
}
