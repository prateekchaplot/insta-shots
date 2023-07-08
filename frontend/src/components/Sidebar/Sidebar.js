import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import "./Sidebar.css";

const Sidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar__button">
        {liked ? (
          <FavoriteIcon onClick={() => setLiked(false)} fontSize="large" />
        ) : (
          <FavoriteBorderIcon onClick={() => setLiked(true)} fontSize="large" />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className="sidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>

      <div className="sidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default Sidebar;
