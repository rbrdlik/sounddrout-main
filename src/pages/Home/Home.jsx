import Hero from "../../components/Hero/Hero";
import Hcards from "../../components/Hcards/Hcards";
import Footer from "../../components/Footer/Footer";
import bannerImg from "../../img/banner.png";
import soundWorldImg from "../../img/soundsWorld.png";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"

export default function Home(){
    return(
        <>
            <Hero height="70vh">
                <Hcards />
            </Hero>
            <div className={styles.swMain}>
                <div className={styles.swMainContent}>
                    <div className={styles.swText}>
                        <div className={styles.swImgContent}>
                            <img src={soundWorldImg} alt="" className={styles.swImg}/>
                        </div>
                        <h2>Join Sound's World Today</h2>
                        <p>The official server for SoundDrout's YouTube channel. Chat with people all day, enter giveaways for nitro, advertise your stuffs, have fun with bots, and much more!</p>
                        <div className={styles.swButtons}>
                            <Link to={"https://discord.com/invite/sound"}><button className={styles.button} id={styles.c1}>Join now</button></Link>
                            <Link to={"/rules"}><button className={styles.button} id={styles.c12}>Rules</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <img src={bannerImg} alt="" className={styles.banner}/>
            <div className={styles.swMain}>
                <div className={styles.swMainContent}>
                    <div className={styles.swText}>
                        <h2>Check out SoundDrout on YouTube</h2>
                        <p>Tons of great videos relating to Discord, check them out and make sure to subscribe :)</p>
                        <div className={styles.swButtons}>
                            <Link to={"https://m.youtube.com/channel/UCh6ZuSSFebAtWJTldsLxTtQ"}><button className={styles.button} id={styles.c2}>View Main Channel</button></Link>
                            <Link to={"https://m.youtube.com/channel/UCCt5PNMXp5Hw3g41c36alIA"}><button className={styles.button} id={styles.c2}>View Second Channel</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> 
        </>
    );
}