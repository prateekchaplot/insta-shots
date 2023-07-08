import { useState, useRef } from "react";
import "./Video.css";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        src={url}
        className="video__player"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      />
      <Footer channel={channel} description={description} song={song} />
      <Sidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
