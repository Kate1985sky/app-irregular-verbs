import React, { useContext, useEffect, useState } from "react";

const EditorContext = React.createContext(null);

const EditorProvider = ({ children, dataKey = "list" }) => {
  const itemLocalStorage = localStorage.getItem(dataKey)
    ? JSON.parse(localStorage.getItem(dataKey))
    : [];

  const [input, setInput] = useState(itemLocalStorage);

  function changeHeandler(event) {
    value.setInput({ ...value.input, [event.target.name]: event.target.value });
  }

  function onSubmit(text) {
    const item = {
      value: text,
    };
    setInput(() => [...input, item]);
  }

  function submitForm() {
    onSubmit(input);
    setInput("");
  }

  function onKeyDown(event) {
    event.preventDefault();
    onSubmit(input);
  }

  useEffect(() => {
    localStorage.setItem(dataKey, JSON.stringify(input));
  }, [input]);

  const value = {
    input,
    setInput,
    changeHeandler,
    submitForm,
    onKeyDown,
    onSubmit
  };

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

const useEditor = () => {
  const value = useContext(EditorContext);

  if (value === null) {
    throw new Error("useEditor must be used within a EditorProvider");
  }

  return value;
};

export { useEditor, EditorProvider };
