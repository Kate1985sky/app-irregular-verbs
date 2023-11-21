// import { useState, useEffect } from "react";

// export const EditorProvider = () => {

//   const itemLocalStorage = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
//   const [listCard, setListCard] = useState(itemLocalStorage);

  // function addItem(text) {
  //   const item = {
  //     value: text,
  //   };
  //   setListCard(() => [...listCard, item]);
  // }

//   useEffect(() => {
//     localStorage.setItem("list", JSON.stringify(listCard));
//   }, [listCard]);
//   return {listCard};
// }
