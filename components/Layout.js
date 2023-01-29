// import Footer from "../components/Footer";
import styles from "../styles/layout.module.scss";

export default function Layout({ children }) {
  return (
    <main className={styles.layoutGrid}>
      {/* header here */}
      {children}
      {/* <Footer /> */}
    </main>
  );
}
