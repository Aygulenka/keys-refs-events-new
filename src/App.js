import React, { useRef, useState, createContext } from "react";
import List from "./List";
import "./App.css"

const ThemeContext = createContext();
const arr = ["элемент", "элемент", "элемент", "элемент"];

function App() {
  const inputRef = useRef();
  const [listElements, setListElements] = useState(arr);
  const [inputText, setInputText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

//добавляем в конец списка элемент
  const handleKeyUp = (e) => {
    if (e.key === "Enter" && inputText !== "") {
      setListElements((prevArr) => [...prevArr, inputText]);
      setInputText("");
    }
  };
  // изменяет элемент вызывая его по ключу
  const handleChange = () => {
    const index = Number(prompt('Введите индекс элемента:'));
    const newElementValue = prompt('Введите новое значение для элемента:');
    
    if (index >= 1 && index <= listElements.length) {
        const updatedElements = [...listElements];
        updatedElements[index - 1] = newElementValue;
        setListElements(updatedElements);
    } else {
        alert('Неверный индекс элемента');
    }
};
const toggleTheme = () => {
  setIsDarkMode((prevMode) => !prevMode);
};
  return (
    <div className={`App ${isDarkMode ? "dark-theme" : ""}`}>
      <header className="App-header">
        <input
          className="input1"
          type="text"
          ref={inputRef}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={handleKeyUp}
        ></input>
        
        <button
          onClick={() => {inputRef.current.focus();}}
        >
          Фокус на поле для ввода текста
        </button>
       <p><List array={listElements} change={handleChange} /></p> 
       <ThemeContext.Provider value={isDarkMode}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
export { ThemeContext };