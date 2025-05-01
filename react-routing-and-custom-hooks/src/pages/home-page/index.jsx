import { Link } from "react-router-dom";
import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>👋 Welcome to the Recipe & Comments App!</h1>
      <p>Choose a page to explore:</p>

      <nav className={styles.nav}>
        <Link to="/recipe-list" className={styles.link}>
          🥗 Recipe List
        </Link>
        <Link to="/comments-list" className={styles.link}>
          💬 Comments List
        </Link>
      </nav>
    </div>
  );
}
