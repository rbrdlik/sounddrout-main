import sounddroutImg from "../../img/SoundDroutImage.png"
import Links from "../Links/Links";
import styles from "./Hcards.module.css"
import discordIcon from "../../img/icons/discord.png"
import youtubeIcon from "../../img/icons/youtube.png"

export default function Hcards(){
    return(
        <>
            <div className={styles.heroContent}>
                <div className={styles.card}>
                    <Links text1="Sound's World" text2="Discord members" count="300,000+" icon={discordIcon} link="https://discord.com/invite/sound"/>
                </div>
                <div className={styles.card}>
                    <img src={sounddroutImg} alt="" className={styles.img}/>
                </div>
                <div className={styles.card}>
                    <Links text1="SoundDrout" text2="YouTube Subscribers" count="357,000+" icon={youtubeIcon} link="https://www.youtube.com/channel/UCh6ZuSSFebAtWJTldsLxTtQ"/>
                </div>
            </div>
        </>
    );
}