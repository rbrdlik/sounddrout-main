import "./Navbar.css"
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"

export default function Navbar(){
    let drop1Active = true
    let drop2Active = true

    const dropDown1 = () => {
        const dropdown1 = document.getElementById("one")
        const dropdown2 = document.getElementById("second")
        const drop1 = document.getElementById("drop1")
        const drop2 = document.getElementById("drop2")
        if(drop1Active){
            drop1Active = false
            drop2Active = true
            drop1.style.color = "#f68437"
            drop2.style.color = "#fff"
            dropdown1.style.display = "block"
            dropdown2.style.display = "none"
        } else{
            drop1Active = true 
            dropdown1.style.display = "none"
            drop1.style.color = "#fff"
        }
    }
    const dropDown2 = () => {
        const dropdown1 = document.getElementById("one")
        const dropdown2 = document.getElementById("second")
        const drop1 = document.getElementById("drop1")
        const drop2 = document.getElementById("drop2")
        if(drop2Active){
            drop2Active = false
            drop1Active = true
            drop1.style.color = "#fff"
            drop2.style.color = "#f68437"
            dropdown2.style.display = "block"
            dropdown1.style.display = "none"
        } else{
            drop2Active = true 
            dropdown2.style.display = "none"
            drop2.style.color = "#fff"
        }
    }
    return(
        <>
            <nav>
                <div className="imgNa">
                    <img src={logo} alt="" id="logoNav"/>
                </div>
                <div className="navb">
                    <ul>
                        <Link to={"/"}><li>Home</li></Link>
                        <div className="dropdownMenu">
                            <li onClick={dropDown1} id="drop1">Discord server <i className="fa-solid fa-caret-down"></i></li>
                            <div className="dropdownMenuBox" id="one">
                                <Link to={"/rules"}><p>Rules</p></Link>
                                <Link to={"/faq"}><p>FAQ</p></Link>
                                <Link to={"/ban-appeals"}><p>Ban Appeals</p></Link>
                            </div>
                        </div>
                    </ul>
                    <Link to={"https://sounddrout.creator-spring.com"}><button className="btn"><i className="fa-solid fa-basket-shopping"></i> Store</button></Link>
                    <ul>
                        <div className="dropdownMenu">
                        <li onClick={dropDown2} id="drop2">YouTube <i className="fa-solid fa-caret-down"></i></li>
                            <div className="dropdownMenuBox" id="second">
                                <Link to={"https://www.youtube.com/channel/UCh6ZuSSFebAtWJTldsLxTtQ?app=desktop"}><p>Main channel</p></Link>
                                <Link to={"https://www.youtube.com/channel/UCCt5PNMXp5Hw3g41c36alIA?app=desktop"}><p>Second channel</p></Link>
                            </div>
                        </div>
                        <Link to={"https://support.sounddrout.com"}><li>Contact us</li></Link>
                    </ul>
                </div>
                <div className="barsNa">
                    <i class="fa-solid fa-bars" id="bars"></i>
                </div>
            </nav>
        </>
    );
}
