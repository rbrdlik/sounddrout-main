import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Faq from "./Faq/Faq";
import Banappeals from "./Banappeals/Banappeals";
import Rules from "./Rules/Rules";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/faq" element={<Faq />}/>
                <Route path="/ban-appeals" element={<Banappeals />}/>
                <Route path="/rules" element={<Rules />}/>
            </Routes>
        </BrowserRouter>
    );
}