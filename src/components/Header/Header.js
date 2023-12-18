// import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import styles from "./Header.module.css";


export const Header = () => {
    return (
      <div className={styles.container}>
        {/* <Logo /> */}
        <Navigation />
      </div>
    );
  };