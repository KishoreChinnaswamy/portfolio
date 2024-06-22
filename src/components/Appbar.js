import React from "react";
import {
  AppBar,
  Avatar,
  Container,
  Toolbar,
  Box,
  MenuItem,
} from "@mui/material";

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              className="text-teal-300"
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #49B5BC",
                fontFamily: "monospace",
              }}
            >
              KC
            </Avatar>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography> */}
            <Box
              sx={{ flexGrow: 1, justifyContent: "flex-end", display: "flex" }}
            >
              <MenuItem className="menuItem">
                <span className="menu-item-span">01. </span>About
              </MenuItem>
              <MenuItem>
                <span className="menu-item-span">02. </span> Experience
              </MenuItem>
              <MenuItem>
                <span className="menu-item-span">03. </span> Projects
              </MenuItem>
              <MenuItem>
                <span className="menu-item-span">04. </span> Contact
              </MenuItem>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
