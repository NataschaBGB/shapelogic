import Products from "@/components/Products";
import styles from "../page.module.css";
import Footer from "@/components/Footer";


export default function ProductsPage() {

    return (
        <section className={styles.page}>
            <main className={styles.main}>
                
                <div className={styles.hero}>
                    <h1>Produkter</h1>
                </div>

                <Products />
            </main>

            <Footer />
        
        </section>
    )

}