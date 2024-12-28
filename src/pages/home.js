import Hero from "../components/Hero";
import "../styles/home.css"
import Footer from "../components/footer";
import Navibar from "../components/navbar";
import Lottie from "lottie-react";
import animationData from "../animations/atoms.json";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Button from "../components/button";
import Services from "../components/services";


const Home = () => {
    return (
    <>
    <header className="nav-bar">
          <Navibar />
    </header>
    <section id="sections">
      <div className="hero">
        <Hero/>
      </div>
      <div className="lab" style={{  
    backgroundImage: "url(/down.jpg)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }}>
        <div className="labtitle">
        <h1>OUR LAB FACILITY</h1>
        </div>
        <Lottie className="atomsanim" animationData={animationData} style={{ height: '130px', width: '130px' }}/>
        <h1 className="service1">
          STATE OF THE ART | <span className="mini">Lab Services</span> <ArrowRightCircleIcon className="rightcircle" style={{height:"35px"}}/>
        </h1>
        <p className="service1text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          <h1 className="service2">
          STATE OF THE ART | <span className="mini">Lab Services</span> <ArrowRightCircleIcon className="rightcircle" style={{height:"35px"}}/>
        </h1>
        <p className="service2text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <Lottie className="atomsanim2" animationData={animationData} style={{ height: '100px', width: '100px' }}/>
        </div>
      <div className="lab" style={{  
    backgroundImage: "url(/top.jpg)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }}>
        <div className="servies">
        <Services/>
      </div>
      </div>
      <div className="appointment">
        <span className="textAppoint"> <h1>Any plan to start a project ?</h1><p>Our Experts always ready to work with you.</p> </span>
        <span className="appointbutton"><Button description={"BOOK YOUR APPOINTMENT"}/></span>
      </div>
      </section>
      <footer className="footermain">
      <Footer />
      </footer>
    </>
    );
};

export default Home;