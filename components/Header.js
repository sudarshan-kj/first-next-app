import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Webdev</span> News
      </h1>
      <p className={styles.description}>Keep upto date</p>
    </div>
  );
};

export default Header;
