import Footer from "../components/footer";
import Navibar from "../components/navbar";
import "../styles/whyPalem.css"

const Why = () => {
    return (
        <div className="why">
            <header className="nav-bar">
                <Navibar />
            </header>
        <h1  className="test1">ABOUT US</h1>
        <p  className="test">Welcome to Palem Organics
PALEM ORGANICS is a pharma organization based out at Hyderabad, India. We are into the business of delivering advanced Discovery, Contract Development and Manufacturing Solutions to organizations across various platforms.

Our goal is To build Palem Organics, A World-Class leading pharmaceutical service provider, elevating quality of life through innovation in healthcare sector.</p>
        <footer>
            <Footer/>
        </footer>
        </div>
    );
};

export default Why;