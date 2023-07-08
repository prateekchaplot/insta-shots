import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import "./Sidebar.css";

const Sidebar = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar__button">
        {liked ? (
          <FavoriteIcon onClick={() => setLiked(false)} fontSize="large" />
        ) : (
          <FavoriteBorderIcon onClick={() => setLiked(true)} fontSize="large" />
        )}
        <p>{liked ? 101 : 100}</p>
      </div>

      <div className="sidebar__button">
        <MessageIcon fontSize="large" />
        <p>345</p>
      </div>

      <div className="sidebar__button">
        <ShareIcon fontSize="large" />
        <p>109</p>
      </div>
    </div>
  );
};

export default Sidebar;
