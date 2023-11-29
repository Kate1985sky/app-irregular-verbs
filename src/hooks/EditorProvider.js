import React, { useContext, useEffect, useState } from "react";

const EditorContext = React.createContext(null);

const EditorProvider = ({ children, dataKey = "irregular-verbs-store" }) => {
  const itemLocalStorage = localStorage.getItem(dataKey)
    ? JSON.parse(localStorage.getItem(dataKey))
    : [];

  const [words, setWords] = useState(itemLocalStorage);

  useEffect(() => {
    localStorage.setItem(dataKey, JSON.stringify(words));
  }, [words]);

  const addWord = (newWord) => {
    setWords((prev) => [
      ...prev,
      {
        ...newWord,
        id: crypto.randomUUID(),
        completed: false
      }
    ])
  };

  const value = {
    words,
    addWord,
    setWords
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
