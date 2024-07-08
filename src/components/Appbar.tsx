import React from "react";
import { Box, MenuItem } from "@mui/material";

// import topImage from "../assets/top.png";

const topImage = require("../assets/top.png");

interface AppbarProps {
  onExperienceClick: () => void;
  onProjectClick: () => void;
}

const Appbar: React.FC<AppbarProps> = ({
  onExperienceClick,
  onProjectClick,
}) => {
  return (
    <div className="image-container">
      <img src={topImage} alt="" style={{ width: "100%" }} />
      <div className="bottom-right">
        <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: "flex" }}>
          <MenuItem className="menuItem" sx={{ color: "#e2ec4b" }}>
            <span className="menu-item-span">01. </span>About
          </MenuItem>
          <MenuItem sx={{ color: "#e2ec4b" }} onClick={onExperienceClick}>
            <span className="menu-item-span">02. </span> Experience
          </MenuItem>
          <MenuItem sx={{ color: "#e2ec4b" }} onClick={onProjectClick}>
            <span className="menu-item-span">03. </span> Projects
          </MenuItem>
          {/* <MenuItem sx={{ color: "#e2ec4b" }}>
            <span className="menu-item-span">04. </span> Contact
          </MenuItem> */}
        </Box>
      </div>
    </div>
  );
};

export default Appbar;
