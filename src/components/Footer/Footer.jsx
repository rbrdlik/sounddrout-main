import "./Footer.css"
import logo from "../../img/logo.png"
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="footer-section-sm1">
                    <div className="footer-left-content">
                        <div className="imgBox">
                            <img src={logo} alt="" className="logo"/>
                        </div>
                        <div className="footer-left-content-text">
                            <h3>SoundDrout</h3>
                            <p>© 2024 all rights reserved</p>
                            <p>Web created by ...</p>
                        </div>
                    </div>
                </div>
                <div className="footer-section-bg">
                    <div className="footer-section-center">
                        <h2>Sound's World</h2>
                        <ul className="footer-links">
                            <Link to={"/rules"}><li>Rules</li></Link>
                            <Link to={"/faq"}><li>FAQ</li></Link>
                            <Link to={"/ban-appeals"}><li>Ban Appeals</li></Link>
                        </ul>
                    </div>
                    <div className="footer-section-center">
                        <h2>SoundDrout</h2>
                        <ul className="footer-links">
                            <Link to={"mailto:sounddrout@yahoo.co.uk"}><li>Contact SoundDrout</li></Link>
                            <Link to={"https://support.sounddrout.com/"}><li>Contact Support</li></Link>
                            <Link to={"https://m.youtube.com/channel/UCh6ZuSSFebAtWJTldsLxTtQ"}><li>Main Channel</li></Link>
                            <Link to={"https://m.youtube.com/channel/UCCt5PNMXp5Hw3g41c36alIA"}><li>Second Channel</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="footer-section-sm">
                    <h2>Social</h2>
                    <div className="footer-btns">
                        <Link to={"https://www.youtube.com/channel/UCh6ZuSSFebAtWJTldsLxTtQ"}><button className="footer-btn"><i class="fa-brands fa-youtube"></i></button></Link>
                        <Link to={"https://discord.com/invite/sound"}><button className="footer-btn"><i class="fa-brands fa-discord"></i></button></Link>
                        <Link to={"https://x.com/SoundDroutYT?mx=2"}><button className="footer-btn"><i class="fa-brands fa-x-twitter"></i></button></Link>
                        <Link to={"https://www.reddit.com/r/soundsworld/"}><button className="footer-btn"><i class="fa-brands fa-reddit"></i></button></Link>
                    </div>
                </div>
            </footer>
        </>
    );
}