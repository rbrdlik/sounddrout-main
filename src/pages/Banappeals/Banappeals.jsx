import styles from "./Banappeals.module.css"
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Banappeals(){
    return(
        <>
            <Hero height="40vh">
                <div className={styles.heroText}>
                    <h1>Ban Appeals</h1>
                </div>
            </Hero>
            <div className={styles.banContent}>
                <div className={styles.banbox} id="">
                    <h1>Sound's World Ban Appeal</h1>
                    <p id={styles.mainText}>Unfortunately, you were banned from Sound’s World. The following page includes information on the ban appeal process. Please read it over before appealing.</p>

                    <h2>Ban Appeal Wait Times</h2>
                    <p>If you believe your ban was incorrect or potentially abusive, you may appeal without a wait time. A claim like this is serious, only consider it after checking the reason for your ban. This can be found in direct messages with our bot Sound’s Utilities, most likely the same place where you got this page’s link.</p>
                    <p>However, if your ban was correct, you must wait at least 2 months from the time you were banned for the first time, 5 months for the second time, and you cannot appeal if this is your third time being banned.</p>

                    <h2>What should I put into my appeal?</h2>
                    <p>An appeal is your chance to convince us that you don’t deserve to be banned, I’m sure you have an idea of how you ask someone for something.</p>
                    <p>Saying sorry five minutes after being banned is not going to get you unbanned, that’s why we ask correctly banned users to wait out their punishment for at least 2 months.</p>
                    <p>Make sure to input your Discord username and tag at the time of your ban, otherwise we will be unable to search for you. If you’re appealing after a long time and no longer know the exact username at the time of your ban then be sure your current name is correct (Case-Sensitive).</p>

                    <h2>What if I don’t receive a response?</h2>
                    <p>Our Head Moderators work hard to answer all ban appeals and support tickets, you should expect a response within 24 hours. If you don’t receive a response for a long time (e.g a week), then assume that something went wrong and try to send in another to reach us properly. Check your emails regularly (including spam folders) to ensure you don’t miss any updates regarding your ban appeal’s processing.</p>

                    <div className={styles.mainBtn}>
                        <Link to={"https://support.sounddrout.com"}><button>Appeal now</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}