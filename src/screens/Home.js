import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid container padding={2}>
      <Grid
        item
        xs={12}
        direction="column"
        display="flex"
        justifyContent="center"
        paddingLeft={5}
      >
        <Typography className="name-header">Hi, my name is </Typography>
        <Typography className="name-title">Kishore Chinnaswamy.</Typography>
        <Typography className="name-sub-title">
          I build things for the web and beyond.
        </Typography>
      </Grid>
      <Grid item xs={12} paddingLeft={5}>
        <Typography
          className="name-header"
          sx={{ color: "#23e5e7 !important" }}
          fontFamily="monospace"
        >
          Passionate about creating beautiful and functional applications.
        </Typography>
      </Grid>
    </Grid>
  );
}
