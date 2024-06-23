import React, { forwardRef } from "react";
import { Grid, Typography, Chip } from "@mui/material";

import robot from "../assets/robot_align.png";

const Experience = forwardRef((props, ref) => {
  const experiences = [
    {
      label: "Front-end Developer",
      duration: "July 2021 - Present",
      organization: "Breezeware India Private Limited",
      description:
        "Transform wireframes into dynamic web applications using React JS and Redux for state management. Collaborate with Project Management to understand and implement client requirements. Work closely with Backend team to integrate REST APIs. Ensure high-quality, scalable, and maintainable code.",
      skills: [
        "React",
        "React Native",
        "Redux",
        "Javascript",
        "API Integration",
        "MUI",
        "Linux",
        "AWS",
        "Thymeleaf",
        "Stripe",
        "Authorize.net",
      ],
    },
    {
      label: "Software Engineer Intern",
      duration: "July 2020 - July 2021",
      organization: "Breezeware India Private Limited",
      description:
        "Acquired foundational knowledge of Java concepts, including OOP, inheritance, and collections. Developed a sample cafeteria ordering system using Java and Spring Boot, integrated with Thymeleaf. Added new features to a Remote Patient Monitoring System using Thymeleaf.",
      skills: [
        "Java",
        "Spring Boot",
        "HTML",
        "CSS",
        "Bootsrap",
        "Thymeleaf",
        "Linux",
      ],
    },
  ];

  // useEffect(() => {
  //   setShouldParagraphAnimate(true);
  //   setShouldAnimate(true);
  // }, []);
  return (
    <div className="image-container">
      <img src={robot} alt="" style={{ width: "100%" }} />
      <div class="top-left">
        <div style={{ display: "flex" }}>
          <div style={{ width: "100%" }}>
            <Grid container>
              <Grid
                item
                xs={12}
                direction="column"
                display="flex"
                // justifyContent="center"
                textAlign="left"
                paddingLeft={5}
              >
                <Typography className="name-header">Hi, my name is </Typography>
                <Typography className="name-title">
                  Kishore Chinnaswamy.
                </Typography>
                <Typography className="name-sub-title">
                  I build things for the web and beyond.
                </Typography>
              </Grid>
              <Grid item xs={12} paddingLeft={5} textAlign="left">
                <Typography
                  className="name-header"
                  sx={{ color: "#23e5e7 !important" }}
                  fontFamily="monospace"
                >
                  Passionate about creating beautiful and functional
                  applications.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  paddingLeft: "3% !important",
                  paddingTop: "2% !important",
                }}
              >
                <Typography
                  ref={ref}
                  textAlign="left"
                  sx={{ color: "#e2ec4b !important" }}
                  // className={`slide-from-left ${
                  //   shouldParagraphAnimate ? "slide-in" : ""
                  // }`}
                  className="slide-in slide-from-left"
                >
                  Experience
                </Typography>
              </Grid>

              {/* {experiences?.map((experience) => {
          return (
            <Grid
              item
              xs={6}
              // className={`experience ${shouldAnimate ? "slide-up" : ""}`}
            >
              <Card style={{ boxShadow: "none" }}>
                <CardContent
                  style={{ backgroundColor: "#0f172a", boxShadow: "none" }}
                >
                  <Grid
                    container
                    spacing={1}
                    sx={{
                      // ":hover": {
                      //   backgroundColor: "#17274B",
                      //   borderRadius: 2,
                      //   opacity: 1,
                      // },
                      padding: 1,
                    }}
                  >
                    <Grid item xs={12}>
                      <Typography style={{ fontWeight: "700", color: "white" }}>
                        {experience.label}
                      </Typography>
                      <Typography
                        style={{ fontWeight: "500", color: "#586D94" }}
                      >
                        {experience.duration}
                      </Typography>
                      <Typography
                        style={{ fontWeight: "500", color: "#586D94" }}
                      >
                        {experience.organization}
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography
                        style={{ fontWeight: "400", color: "#7C90B7" }}
                      >
                        {experience.description}
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      {experience.skills.map((skill) => {
                        return (
                          <Chip
                            variant="outlined"
                            label={skill}
                            style={{
                              color: "#49b5bc",
                              borderColor: "#49b5bc",
                              margin: "4px",
                            }}
                          />
                        );
                      })}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          );
        })} */}

              {experiences?.map((experience) => {
                return (
                  <div style={{ padding: "5%", paddingTop: "4%" }}>
                    <div class="card">
                      <div class="upper-part">
                        <div class="upper-part-face">
                          {experience.description}
                        </div>
                        <div class="upper-part-back">
                          <div>
                            {experience.skills.map((skill) => (
                              <Chip
                                variant="outlined"
                                label={skill}
                                style={{
                                  // width: "50px",
                                  color: "#23e5e7",
                                  borderColor: "#23e5e7",
                                  margin: "4px",
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div class="lower-part">
                        <div class="lower-part-face">
                          <div style={{ textAlign: "center" }}>
                            <Typography sx={{ color: "#23e5e7" }}>
                              {experience.label}
                            </Typography>
                            <Typography sx={{ color: "#23e5e7" }}>
                              {experience.organization}
                            </Typography>
                            <Typography sx={{ color: "#23e5e7" }}>
                              {experience.duration}
                            </Typography>
                          </div>
                        </div>
                        <div class="lower-part-back">Skills</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Grid>
          </div>
          {/* <div style={{ width: "30%" }}>
        <img src={robot} alt="" style={{ width: "100%" }} />
      </div> */}
        </div>
      </div>
    </div>
  );
});

export default Experience;
