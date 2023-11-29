import { ContentBox } from "../../components/ContentBox/ContentBox";
import { Levels } from '../../components/Levels/Levels';
import { AllCards } from "../../components/AllCards/AllCards";
import styles from "./AllWords.module.css";

export const AllWords = () => {
  
  return (
    <ContentBox>
      <div className={styles.wrapper}>
        <Levels />
        <AllCards />
      </div>
    </ContentBox>
  );
};
