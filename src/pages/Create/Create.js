import { ContentBox } from "../../components/ContentBox/ContentBox";
import style from "./Create.module.css";
import { useEditor } from "../../hooks/EditorProvider";
import { useState } from "react";

const defaultFormValues = {
  "1st form": "",
  "2st form": "",
  "3st form": "",
  "example of usage": "",
  "translate of the world": "",
  "translate of the example": "",
  "levels": "A1", 
};

export const Create = () => {
  const [formState, setFormState] = useState(defaultFormValues);
  const value = useEditor();



  const submitForm = (event) => {
    event.preventDefault();
    value.addWord(formState);
    resetForm();
  }

  const resetForm = () => {
    setFormState(defaultFormValues);
  };


  const changeHeandler = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <ContentBox>
      <div className={style.wrapper}>
        <div className={style.form}>
          <form className={style.formApplycation} onSubmit={submitForm}>
            <label>
              <h1 className={style.titleMain}>1. Add forms of a word</h1>
              <input
                onChange={changeHeandler}
                value={formState["1st form"]}
                type="text"
                name="1st form"
                className={style.formVerbs}
                placeholder="1st form"
              />
              <input
                onChange={changeHeandler}
                value={formState["2st form"]}
                type="text"
                name="2st form"
                className={style.formVerbs}
                placeholder="2st form"
              />
              <input
                onChange={changeHeandler}
                value={formState["3st form"]}
                type="text"
                name="3st form"
                className={style.formVerbs}
                placeholder="3st form"
              />
            </label>
            <hr className={style.line} />

            <label className={style.list}>
              <h2 className={style.titleMain}>2. Add an example of usage</h2>

              <input
                onChange={changeHeandler}
                value={formState["example of usage"]}
                type="text"
                name="example of usage"
                className={style.example}
                placeholder="An example"
              />
              <hr className={style.line} />
            </label>
            <label>
              <h3 className={style.titleMain}>3. Add translations</h3>

              <input
                onChange={changeHeandler}
                value={formState["translate of the world"]}
                type="text"
                name="translate of the world"
                className={style.formVerbs}
                placeholder="translate of the world"
              />
              <br />
              <input
                name="translate of the example"
                value={formState["translate of the example"]}
                onChange={changeHeandler}
                className={style.example}
                type="text"
                placeholder="A translation of the example"
              />
            </label>
            <hr className={style.line} />

            <span className={style.title}>A level of the word</span>
            <select
              value={formState["levels"]}
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
            <button type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </ContentBox>
  );
};
