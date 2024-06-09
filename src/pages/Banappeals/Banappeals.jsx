import styles from "./Banappeals.module.css"
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

export default function Banappeals(){
    return(
        <>
            <Hero height="40vh">
                <div className={styles.heroText}>
                    <h1>Ban Appeals</h1>
                </div>
            </Hero>
        </>
    );
}