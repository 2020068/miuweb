/** @format */

import React, { useState } from "react";
import ImageCarousel from "@/components/imageCarousel";
import {
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import FormModal from "./Modal/modal";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
  },
  darkerTextField: {
    "& .MuiInputBase-input": {
      color: "rgba(0, 0, 0, 0.9)",
    },
  },
}));

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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SSPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <Grid container direction='column' spacing={2}>
      <Grid item>
        <ImageCarousel
          textContent='Student Support'
          textdesc='Where to turn when you need a helping hand'
          image={"/LifePage/Lifebg.jpg"}
        />
      </Grid>

      <Paper
        elevation={0}
        sx={{
          maxWidth: "90%",
          marginTop: "5rem",
          marginLeft: "5rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          border: "1px solid #173980",
          padding: "2rem",
        }}>
        <ThemeProvider theme={theme}>
          <Grid
            container
            direction='column'
            spacing={2}
            className={classes.formContainer}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              marginTop: "5rem",
            }}>
            <Box>
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
                "Are you currently considering enlisting the expertise of a
                tutor to augment your progress and proficiency in your
                endeavors?"
              </Typography>
            </Box>
            <Box sx={{ padding: "1rem", marginLeft: "2rem" }}>
              <Typography
                sx={{
                  fontFamily: "fantasy",
                  fontStyle: "oblique",
                  fontSize: "1.5rem",
                }}>
                1.Customized Learning Plan:
              </Typography>
              <Typography>
                Tutors can create a customized learning plan based on your
                strengths, weaknesses, and goals, ensuring that you make
                progress efficiently.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "fantasy",
                  fontStyle: "oblique",
                  fontSize: "1.5rem",
                }}>
                2. Motivation:
              </Typography>
              <Typography>
                Tutors can offer encouragement and motivation, helping you stay
                focused and committed to your learning goals.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "fantasy",
                  fontStyle: "oblique",
                  fontSize: "1.5rem",
                }}>
                3. Personalized Attention:
              </Typography>
              <Typography>
                Tutors can tailor their teaching style to your learning pace and
                preferences, providing personalized attention that may not be
                possible in a classroom setting.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "fantasy",
                  fontStyle: "oblique",
                  fontSize: "1.5rem",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}>
                If you want to find a tutor click
                <Button
                  onClick={handleOpen}
                  style={{ color: "#173980", fontSize: "1.3rem" }}>
                  here
                </Button>
                .
              </Typography>
              <FormModal open={open} handleClose={handleClose} />
            </Box>
          </Grid>
        </ThemeProvider>
      </Paper>
    </Grid>
  );
};

export default SSPage;
