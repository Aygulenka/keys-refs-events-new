import React, { useContext } from "react";
import { ThemeContext } from "./App";

function List({ array, change }) {
  const isDarkMode = useContext(ThemeContext);
  const listItems = array.map((element, index) => (
    <li key={index.toString()}>
        {element} c индексом: {index + 1}
    </li>
));

  return (
    <>
      <button onClick={change}>Изменить</button>
      <ul>{listItems}</ul>
    </>
  );
}

export default List;