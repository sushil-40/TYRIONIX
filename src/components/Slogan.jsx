import React, { useEffect, useState } from "react";
import { FaTruckMonster } from "react-icons/fa";
const slogansWithCTA = [
  {
    slogan: "Streamline Your Tyre Shop Operations Today",
    cta: "Get Started Now!",
  },
  {
    slogan: "Effortless Tyre Management at Your Fingertips",
    cta: "Try It Today!",
  },
  {
    slogan: "Revolutionize Your Tyre Shop with Ease",
    cta: "Explore Features!",
  },
  {
    slogan: "Efficiency Meets Simplicity for Your Tyre Shop",
    cta: "Sign Up Today!",
  },
  {
    slogan: "Run Your Tyre Shop Smarter, Not Harder",
    cta: "Start Managing Now!",
  },
  {
    slogan: "Transform Your Tyre Shop Management Experience",
    cta: "Join Us!",
  },
];
export const Slogan = () => {
  const [showSlogan, setShowSlogan] = useState(slogansWithCTA[0]);

  useEffect(() => {
    setInterval(() => {
      setShowSlogan(
        slogansWithCTA[Math.floor(Math.random() * slogansWithCTA.length)]
      );
    }, 3000);
  }, []);
  const { slogan, cta } = showSlogan;

  return (
    <div
      className="d-flex flex-column justify-content-center"
      style={{
        height: "100%",
      }}
    >
      <div
        className="text-warning mb-5"
        style={{
          fontSize: "10rem",
        }}
      >
        <FaTruckMonster />
      </div>
      <h3>
        <strong>{slogan}</strong>
      </h3>
      <span>
        <br />
        <h4>-- {cta}</h4>
      </span>
    </div>
  );
};
