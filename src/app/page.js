import Products from "@/components/Products";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <main className={styles.main}>
        <Products />
      </main>
      <Footer />
    </div>
  );
}
