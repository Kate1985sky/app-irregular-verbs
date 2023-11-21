import { ContentBox } from "../../components/ContentBox/ContentBox";
import style from "./Create.module.css";
import { useState, useEffect } from "react";

export const Create = () => {
  const itemLocalStorage = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  const [input, setInput] = useState(itemLocalStorage);
  

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(input));
  }, [input]);

  function changeHeandler(event) {
    const value = event.target.value;
    setInput([...input, { [event.target.name]: value }]);
  }
  console.log(input);

  function submitForm() {
    setInput("");
  }

  return (
    <ContentBox>
      <div className={style.wrapper}>
        <div className={style.form}>
          <form>
            <label>
              Add forms of a word
              <input
                checked={"1st form"}
                onChange={changeHeandler}
                value={input}
                required
                type="text"
                name="1st form"
                className={style.formVerbs}
              />
              <input
                checked={"2st form"}
                onChange={changeHeandler}
                value={input}
                required
                type="text"
                name="2st form"
                className={style.formVerbs}
              />
              <input
                checked={"3st form"}
                onChange={changeHeandler}
                value={input}
                required
                type="text"
                name="3st form"
                className={style.formVerbs}
              />
            </label>
            <hr className={style.line} />

            <label>
              Add an example of usage
              <input
                checked={"example of usage"}
                onChange={changeHeandler}
                value={input}
                required
                type="text"
                name="example of usage"
                className={style.example}
                placeholder="An example"
              />
              <hr className={style.line} />
            </label>
            <label>
              Add translations
              <input
                checked={"translate of the world"}
                onChange={changeHeandler}
                value={input}
                required
                type="text"
                name="translate of the world"
                className={style.formVerbs}
                placeholder="translate of the world"
              />
              <br />
              <input
                required
                checked={"translate of the example"}
                name="translate of the example"
                value={input}
                onChange={changeHeandler}
                className={style.example}
                type="text"
                placeholder="A translation of the example"
              />
            </label>
            <hr className={style.line} />

            <span className={style.title}>A level of the word</span>
            <select
              value={input}
              className={style.levels}
              name="levels"
              onChange={changeHeandler}
            >
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
            </select>
            <button type="submit" onClick={submitForm}>
              Save
            </button>
          </form>
        </div>
      </div>
    </ContentBox>
  );
};
