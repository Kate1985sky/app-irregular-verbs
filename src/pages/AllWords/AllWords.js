import { ContentBox } from "../../components/ContentBox/ContentBox";
import { useEditor } from "../../hooks/EditorProvider";
import styles from "./AllWords.module.css";

export const AllWords = () => {
  const value = useEditor();
    function handleSwithCard() {
        
    }
  return (
    <ContentBox>
      <div className={styles.wrapper}>
        <div className={styles.filter}>
          <span>
            <button>All</button>
          </span>
          <button>A1</button>
          <button>A2</button>
          <button>B1</button>
          <button>B2</button>
          <button>C1</button>
          <button>C2</button>
        </div>
        <div className={styles.cards}>
          <ul>
            {value.input.map((card) => (
              <li>
                <div
                  className={styles.card}
                  key={card.id}
                  onClick={() => handleSwithCard(card.id)}
                >
                  <span>A1</span>
                  <span className={styles.items}>
                    {card["1st form"]}
                    {card["2st form"]}
                    {card["3st form"]}
                  </span>
                  <span className={styles.items}>
                    {card["example of usage"]}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentBox>
  );
};
