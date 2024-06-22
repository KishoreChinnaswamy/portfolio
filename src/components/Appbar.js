import React from "react";
import {
  AppBar,
  Avatar,
  Container,
  Toolbar,
  Box,
  MenuItem,
} from "@mui/material";

import topImage from "../assets/top.png";

export default function Appbar() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar
    //     position="static"
    //     style={{ backgroundColor: "transparent", boxShadow: "none" }}
    //   >
    //     <Container maxWidth="xl">
    //       <Toolbar disableGutters>
    //         <Avatar
    //           className="text-teal-300"
    //           sx={{
    //             backgroundColor: "transparent",
    //             border: "1px solid #007383",
    //             fontFamily: "monospace",
    //           }}
    //         >
    //           KC
    //         </Avatar>
    //         {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //           News
    //         </Typography> */}
    //         <Box
    //           sx={{ flexGrow: 1, justifyContent: "flex-end", display: "flex" }}
    //         >
    //           <MenuItem className="menuItem" sx={{ color: "#e2ec4b" }}>
    //             <span className="menu-item-span">01. </span>About
    //           </MenuItem>
    //           <MenuItem sx={{ color: "#e2ec4b" }}>
    //             <span className="menu-item-span">02. </span> Experience
    //           </MenuItem>
    //           <MenuItem sx={{ color: "#e2ec4b" }}>
    //             <span className="menu-item-span">03. </span> Projects
    //           </MenuItem>
    //           <MenuItem sx={{ color: "#e2ec4b" }}>
    //             <span className="menu-item-span">04. </span> Contact
    //           </MenuItem>
    //         </Box>
    //       </Toolbar>
    //     </Container>
    //   </AppBar>
    // </Box>
    <div className="image-container">
      <img src={topImage} alt="" style={{ width: "100%" }} />
      <div class="bottom-right">
        <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: "flex" }}>
          <MenuItem className="menuItem" sx={{ color: "#e2ec4b" }}>
            <span className="menu-item-span">01. </span>About
          </MenuItem>
          <MenuItem sx={{ color: "#e2ec4b" }}>
            <span className="menu-item-span">02. </span> Experience
          </MenuItem>
          <MenuItem sx={{ color: "#e2ec4b" }}>
            <span className="menu-item-span">03. </span> Projects
          </MenuItem>
          <MenuItem sx={{ color: "#e2ec4b" }}>
            <span className="menu-item-span">04. </span> Contact
          </MenuItem>
        </Box>
      </div>
    </div>
  );
}
