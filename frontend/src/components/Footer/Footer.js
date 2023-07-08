import "./Footer.css";
import { useState } from "react";

import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useSpring, animated } from "react-spring";

const Footer = ({ channel, description, song }) => {
  const [key, setKey] = useState(1);
  const scrolling = useSpring({
    from: { transform: "translate(55%,0)" },
    to: { transform: "translate(2%,0)" },
    config: { duration: 5000 },
    reset: true,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div className="footer">
      <div className="footer__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="footer__ticker">
          <MusicNoteIcon className="footer__icon" />
          <div className="footer__scrollText">
            <animated.div style={scrolling}>{song}</animated.div>
          </div>
        </div>
      </div>
      <img
        className="footer__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="video footer"
      />
    </div>
  );
};

export default Footer;
