import React from "react";
import "../styles/Hero.css";
import { FlipWords } from "./flip.tsx";
import Button from "./button";
import Card from "./card";
import Conlottie from "../animations/contactlotttie";
import Mail from "../animations/mail.js";
import Map from "../animations/map.js";

const Hero = () => {
  const words = [
    "Custom synthesis",
    "Toll Manufacturing",
    "Contract Research Services",
    "Process Design and Improvement",
  ];

  const cardDetails = [
    { header:<Conlottie/>, desc1: "Contact us at", desc2: "9100002250" },
    { header:<Mail/>, desc1: "Mail us at", desc2: "abcd@gmail.com" },
    { header:<Map/>, desc1: "We are located at", desc2: "Location" },
  ];

  return (
    <>

      {/* Hero Section */}
      <section id="Hero">
        {/* Background Video */}
        <video autoPlay loop muted className="bg">
          <source src="/palem 2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Main Content Section */}
        <main className="content">
          We specialize in
          <div className="flip">
            <FlipWords words={words} />
          </div>
          <div className="button">
            <Button description="OUR SERVICES" />
          </div>
        </main>

        {/* Card Section */}
        <div className="card">
          <div className="cards">
            {cardDetails.map((card, index) => (
              <Card
                key={index}
                header={card.header}
                desc1={card.desc1}
                desc2={card.desc2}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

