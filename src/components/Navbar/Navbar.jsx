import "./Navbar.css"

export default function Navbar(){
    return(
        <>
            <nav>
                <div className="navb">
                    <ul>
                        <li>Home</li>
                        <li>Discord server <i class="fa-solid fa-caret-down"></i></li>
                    </ul>
                    <button className="btn"><i class="fa-solid fa-basket-shopping"></i> Store</button>
                    <ul>
                        <li>YouTube <i class="fa-solid fa-caret-down"></i></li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </nav>
        </>
    );
}