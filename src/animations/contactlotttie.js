import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function Conlottie() {
  const containerOne = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      name:"animationOne",
      container: containerOne.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("./test1.json")
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div className="App">
      {/* First lottie */}
      <div
        ref={containerOne}
        onMouseEnter={() => lottie.play("animationOne")}
        onMouseLeave={() => lottie.pause("animationOne")}
        style={{
            height:46, // Set height dynamically
            padding: 2, // Remove padding
            margin: 0, // Remove margin
            overflow: "hidden", // Ensure no overflow
          }}
      />
    </div>
  );
}

export default Conlottie;