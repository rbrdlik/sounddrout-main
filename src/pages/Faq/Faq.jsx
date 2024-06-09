import styles from "./Faq.module.css"
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

export default function Faq(){
    return(
        <>
            <Hero height="40vh">
                <div className={styles.heroText}>
                    <h1>FAQ</h1>
                </div>
            </Hero>
        </>
    );
}