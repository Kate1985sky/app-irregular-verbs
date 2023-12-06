import styles from './WordOfTheDay.module.css';
import { useEditor } from "../../hooks/EditorProvider";
import {useState} from 'react';

export function WordOfTheDay() {
    const value = useEditor();
    const [currentDate, setCurrentDate] = useState(new Date());
    
    const setNewDate = () => {

    }

  return (
    <div className={styles.cards}>
      <ul className={styles.listCards}>
        {value.words.map((card) => (
          <li className={styles.itemCard} key={card.id}>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
