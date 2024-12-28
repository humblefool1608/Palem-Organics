import Footer from "../components/footer";
import Navibar from "../components/navbar";
import "../styles/servicespage.css"

const ServicesPage = () => {
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

export default ServicesPage;