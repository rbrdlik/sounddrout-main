import styles from "./Hero.module.css"
import Navbar from "../Navbar/Navbar"

export default function Hero({children, height}){
    return( 
        <div className={styles.hero} style={{ height: height }}>
            <div className={styles.heroMainContent}>
                <Navbar />
                {children}
            </div>
        </div>
    );
}