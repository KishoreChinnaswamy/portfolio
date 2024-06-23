import React, { forwardRef } from "react";
import "./Card.css";
import { Chip, Grid, Typography } from "@mui/material";

const projects = [
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

const Projects = forwardRef((props, ref) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{ paddingLeft: "3% !important", paddingTop: "2% !important" }}
      >
        <Typography
          ref={ref}
          sx={{ color: "#e2ec4b !important" }}
          className="slide-in slide-from-left"
        >
          Projects
        </Typography>
      </Grid>

      {projects.map((project) => {
        return (
          <div style={{ padding: "5%", paddingTop: "4%" }}>
            <div class="card">
              <div class="upper-part">
                <div class="upper-part-face">{project.description}</div>
                <div class="upper-part-back">
                  <div>
                    {project.skills.map((skill) => (
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
                <div class="lower-part-face">{project.label}</div>
                <div class="lower-part-back">Skills</div>
              </div>
            </div>
          </div>
        );
      })}
    </Grid>
  );
});

export default Projects;
