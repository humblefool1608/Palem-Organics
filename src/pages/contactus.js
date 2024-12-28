import Footer from "../components/footer";
import Navibar from "../components/navbar";
import "../styles/contactus.css"

const Contactus = () => {
    return (
        <div className="why">
            <header className="nav-bar">
                <Navibar />
            </header>
        <p className="test">Hello</p>
        <footer>
            <Footer/>
        </footer>
        </div>
    );
};

export default Contactus;