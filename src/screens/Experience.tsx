import React, { forwardRef } from "react";
import { Grid, Typography, Chip } from "@mui/material";

const robot = require("../assets/robot_align.png");

interface ExperienceProps {
  label: string;
  duration: string;
  organization: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceProps[] = [
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
      "Bootstrap",
      "Thymeleaf",
      "Linux",
    ],
  },
];

const Experience = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="image-container">
      <img
        className="projects-image"
        src={robot}
        alt=""
        style={{ width: "100%" }}
      />
      <div className="top-left">
        <div style={{ display: "flex" }}>
          <div style={{ width: "100%" }}>
            <Grid container>
              <Grid
                item
                xs={12}
                direction="column"
                display="flex"
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
                  className="slide-in slide-from-left"
                >
                  Experience
                </Typography>
              </Grid>

              <Grid
                item
                container
                xs={12}
                spacing={2}
                className="grid-item"
                paddingTop="40px"
              >
                {experiences.map((experience) => (
                  <Grid
                    key={experience.label}
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    padding={8}
                  >
                    <div>
                      <div className="card">
                        <div className="upper-part">
                          <div className="upper-part-face">
                            {experience.description}
                          </div>
                          <div className="upper-part-back">
                            <div>
                              {experience.skills.map((skill) => (
                                <Chip
                                  key={skill}
                                  variant="outlined"
                                  label={skill}
                                  style={{
                                    color: "#23e5e7",
                                    borderColor: "#23e5e7",
                                    margin: "4px",
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="lower-part">
                          <div className="lower-part-face">
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
                          <div className="lower-part-back">Skills</div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Experience;
