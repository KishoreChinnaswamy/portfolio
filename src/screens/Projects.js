import React, { useEffect, useState } from "react";
import { Grid, Typography, Card, CardContent, Chip } from "@mui/material";

export default function Projects() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [shouldParagraphAnimate, setShouldParagraphAnimate] = useState(false);

  const experiences = [
    {
      label: "Revolution Picture Cars",
      description:
        "Developed a full-fledged car rental system comprising a renter app and an admin app. Integrated Typesense for real-time search capabilities in the renter app, enhancing user experience. Implemented Stripe in the admin app for secure transaction processing.",
      skills: [
        "React",
        "Redux",
        "API Integration",
        "MUI",
        "Typesense",
        "Stripe",
        "DocuSign",
      ],
    },
    {
      label: "Canoja Verify",
      description:
        "Developed a license registration system consisting of a Customer portal and a Reviewer portal. Integrated both applications with Form.io to facilitate form creation and submission, with dynamic rendering of forms based on user inputs.",
      skills: ["React", "Redux", "API Integration", "MUI", "AWS Amplify"],
    },
    {
      label: "Savi Benefits",
      description:
        "Developed a patient registration system consisting of a Patient portal and a Reviewer portal. Integrated Typesense for instant search functionality and dynamic rendering of patient data. Led the project from UI design to final deployment, ensuring efficient data management and user-friendly interfaces.",
      skills: ["React", "Redux", "API Integration", "Typesense", "MUI"],
    },
    {
      label: "Dynamo Forms",
      description:
        "Led the development of a dynamic form builder, enabling drag-and-drop creation of forms with editing, submission, and publishing capabilities. Managed the project from initiation to delivery, ensuring a user-friendly and versatile solution.",
      skills: ["React", "API Integration", "Dynamic Rendering"],
    },
    {
      label: "Chorus Health",
      description:
        "Developed a patient registration mobile system featuring signup capabilities, displaying patient data using charts and graphs, and receiving data from patient-enrolled devices. Integrated the mobile app with the backend to ensure seamless data flow and functionality.",
      skills: ["React Native", "API Integration", "Java", "Graphs"],
    },
    {
      label: "Refresh Health",
      description:
        "Enhanced a Remote Patient Monitoring (RPM) system by adding a new signup form, integrating additional devices for measuring patient data, and implementing new styles. Ensured seamless integration with the backend for optimal system performance and user experience.",
      skills: [
        "Thymeleaf",
        "Javascript",
        "CSS",
        "Ajax",
        "jQuery",
        "API Integration",
      ],
    },
    {
      label: "Alstom",
      description:
        "Enhanced a Transportation Management System (TMS) by adding dynamically rendered tables, new screens, integration with BPMN tasks, and updated styles. These improvements aimed to enhance usability and efficiency within the system.",
      skills: [
        "Thymeleaf",
        "Javascript",
        "CSS",
        "Ajax",
        "jQuery",
        "API Integration",
      ],
    },
  ];

  // useEffect(() => {
  //   setShouldParagraphAnimate(true);
  //   setShouldAnimate(true);
  // }, []);
  return (
    <div>
      <Grid container padding={2} paddingLeft={5}>
        <Grid item xs={12}>
          <Typography className="slide-in slide-from-left">Projects</Typography>
        </Grid>

        {experiences?.map((experience) => {
          return (
            <Grid
              item
              xs={4}
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
        })}
      </Grid>
    </div>
  );
}
