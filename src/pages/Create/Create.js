import { ContentBox } from "../../components/ContentBox/ContentBox";
import style from "./Create.module.css";

export const Create = () => {
  return (
    <ContentBox>
      <div className={style.wrapper}>
        <div className={style.form}>
          <ol>
            <li className={style.list}>Add forms of a word</li>
            <input
              className={style.formVerbs}
              type="text"
              placeholder="1st form"
            />
            <input
              className={style.formVerbs}
              type="text"
              placeholder="1st form"
            />
            <input
              className={style.formVerbs}
              type="text"
              placeholder="1st form"
            />
            <hr className={style.line} />
            <li className={style.list}>Add an example of usage</li>
            <input
              className={style.example}
              type="text"
              placeholder="An example"
            />
            <hr className={style.line} />
            <li className={style.list}>Add translations</li>
            <input
              className={style.formVerbs}
              type="text"
              placeholder="A translation"
            />
            <br />
            <input
              className={style.example}
              type="text"
              placeholder="A translation of the example"
            />
            <hr className={style.line} />
            <li className={style.list}>Select a level of the word</li>
            <span className={style.title}>A level of the word</span>
            <select className={style.levels} name="levels">
              <option value="lion">A1</option>
              <option value="tiger">A2</option>
              <option value="leopard">B1</option>
              <option value="leopard">B2</option>
              <option value="leopard">C1</option>
              <option value="leopard">C2</option>
            </select>
            <button>Save</button>
          </ol>
        </div>
      </div>
    </ContentBox>
  );
};
