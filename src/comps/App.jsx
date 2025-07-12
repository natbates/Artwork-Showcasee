import "../styles/App.css";
import { Route, Routes} from "react-router-dom";

import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx"; // Assuming you have a Home component

const App = () => {

    return (
        <div className="page-container">

            <Nav />

            <div className="page-content">                
                <Routes>
                    <Route path="/" element = {<Home />}/>
                    <Route path="/about" element = {<About />} />
                    <Route path="/contact" element = {<Contact />} />

                    <Route path="/*" element = {<h1>Not Found</h1>} />

                </Routes>

            </div>

            <Footer />

        </div>
    );
}

export default App;