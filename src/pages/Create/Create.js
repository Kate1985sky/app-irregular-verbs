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
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
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
                onChange={changeHeandler}
                value={input["1st form"]}
                type="text"
                name="1st form"
                className={style.formVerbs}
              />
              <input
                onChange={changeHeandler}
                value={input["2st form"]}
                type="text"
                name="2st form"
                className={style.formVerbs}
              />
              <input
                onChange={changeHeandler}
                value={input["3st form"]}
                type="text"
                name="3st form"
                className={style.formVerbs}
              />
            </label>
            <hr className={style.line} />

            <label>
              Add an example of usage
              <input
                onChange={changeHeandler}
                value={input["example of usage"]}
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
                onChange={changeHeandler}
                value={input["translate of the world"]}
                type="text"
                name="translate of the world"
                className={style.formVerbs}
                placeholder="translate of the world"
              />
              <br />
              <input
                name="translate of the example"
                value={input["translate of the example"]}
                onChange={changeHeandler}
                className={style.example}
                type="text"
                placeholder="A translation of the example"
              />
            </label>
            <hr className={style.line} />

            <span className={style.title}>A level of the word</span>
            <select
              value={input["levels"]}
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
