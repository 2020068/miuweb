/** @format */

import React from "react";
import {
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { color } from "@mui/system";
import ButtonBase from "@mui/material/ButtonBase";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Fresh: React.FC = () => {
  return (
    <Grid container direction='column' spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          borderBottom: "solid 2px #173992",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "2rem",
          minHeight: "20rem",
        }}>
        <Grid
          item
          xs={12}
          lg={10}
          xl={8}
          sx={{ maxWidth: "40rem", margin: "auto", marginTop: "5rem" }}>
          <ThemeProvider theme={theme}>
            <Typography
              variant='h2'
              sx={{
                color: "#173980",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                padding: "2rem",
                width: "100%",
                fontSize: "2rem",
                textAlign: "center",
              }}>
              ADVICE FOR NEW COLLEGE STUDENTS:
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm
        container
        sx={{ width: "80%", marginLeft: "10rem" }}>
        <Grid item xs container direction='column' spacing={2}>
          <Grid item>
            <Typography
              sx={{
                fontFamily: "fantasy",
                fontStyle: "oblique",
                fontSize: "2rem",
              }}>
              1. Apply For Scholarships
            </Typography>
            <Typography>
              Scholarship money is the best way to cut down on student debt and
              easy scholarships are often not taken advantage of because people
              just don’t know about them! So many universities offer thousands
              of dollars in scholarships. Most of the time they are awarded for
              sports or grades but you will most likely know if you are being
              offered a scholarship for one of those two ahead of time. Applying
              for scholarships directly through your specific school is one of
              the best ways to earn some extra money, because you are competing
              against fewer students (only within your school!) and less people
              tend to know about them. In addition to these types of
              scholarships though, there are also
              <Link href='/page1' passHref>
                <Typography sx={{ color: "#173932", fontWeight: "bold" }}>
                  plenty of scholarship
                </Typography>
              </Link>
              of all kinds offered by companies, professional organizations,
              non-profits, and other groups who are looking to help out
              students, so don’t forget about these!
            </Typography>
          </Grid>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt='complex' src='tips/scholarship.jpg' />
            </ButtonBase>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Fresh;
