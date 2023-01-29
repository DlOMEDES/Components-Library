import styles from "../styles/banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        UI Component <span className={styles.libSpan}>Library</span>
      </h1>
    </div>
  );
};

export default Banner;
