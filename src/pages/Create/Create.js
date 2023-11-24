import { ContentBox } from "../../components/ContentBox/ContentBox";
import style from "./Create.module.css";
import { useEditor } from "../../hooks/EditorProvider";


export const Create = () => {
 const value = useEditor();


  return (
    <ContentBox>
      <div className={style.wrapper}>
        <div className={style.form}>
          <form className={style.formApplycation} onSubmit={value.onKeyDown}>
            <label>
              <h1 className={style.titleMain}>1. Add forms of a word</h1>
              <input
                onChange={value.changeHeandler}
                value={value.input["1st form"]}
                type="text"
                name="1st form"
                className={style.formVerbs}
                placeholder="1st form"
              />
              <input
                onChange={value.changeHeandler}
                value={value.input["2st form"]}
                type="text"
                name="2st form"
                className={style.formVerbs}
                placeholder="2st form"
              />
              <input
                onChange={value.changeHeandler}
                value={value.input["3st form"]}
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
                onChange={value.changeHeandler}
                value={value.input["example of usage"]}
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
                onChange={value.changeHeandler}
                value={value.input["translate of the world"]}
                type="text"
                name="translate of the world"
                className={style.formVerbs}
                placeholder="translate of the world"
              />
              <br />
              <input
                name="translate of the example"
                value={value.input["translate of the example"]}
                onChange={value.changeHeandler}
                className={style.example}
                type="text"
                placeholder="A translation of the example"
              />
            </label>
            <hr className={style.line} />

            <span className={style.title}>A level of the word</span>
            <select
              value={value.input["levels"]}
              className={style.levels}
              name="levels"
              onChange={value.changeHeandler}
            >
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
            </select>
            <button disabled={!value.input} type="submit" onClick={value.submitForm}>
              Save
            </button>
          </form>
        </div>
      </div>
    </ContentBox>
  );
};
