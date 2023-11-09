import React from "react";

function List({ array, change }) {
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