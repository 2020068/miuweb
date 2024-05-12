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
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Link from "next/link";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

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

const buttons = [
  <Link href='./tips/Fresh/Fresh' key='one'>
    <Button key='one'>ADVICE FOR NEW COLLEGE STUDENTS</Button>
  </Link>,
  <Link href='./tips/Success/Success' key='two'>
    <Button key='two'>COLLEGE TIPS FOR SUCCESS IN CLASS</Button>
  </Link>,
  <Link href='./tips/Survive/Survive' key='three'>
    <Button key='three'>HOW TO SURVIVE FRESHMAN IN DORM</Button>
  </Link>,
  <Link href='./tips/Solve/Solve' key='four'>
    <Button key='four'>HOW TO MAKE FRIENDS IN COLLEGE</Button>
  </Link>,
];

const Tips: React.FC = () => {
  return (
    <Grid container direction='column' spacing={2}>
      <Grid
        container
        direction='column'
        spacing={2}
        sx={{ borderBottom: "solid 2px #173992", marginBottom: "2rem" }}>
        <Grid
          item
          xs={12}
          sx={{
            borderBottom: "solid 2px #173992",
            backgroundImage: "url('tips/back.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "2rem",
            minHeight: "25rem",
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
                }}>
                College Advice For Freshman That Will Completely Change Your
                College Experience
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid
          item
          direction='row'
          spacing={2}
          sx={{
            display: "flex",
            maxWidth: "80%",
            borderBottomWidth: "0.05rem",
            width: "82%",
            marginLeft: "10rem",
          }}>
          <Paper
            elevation={0}
            sx={{
              maxWidth: "70%",
              borderInlineEndWidth: "0.05rem",
            }}>
            <Grid container direction='column' spacing={2}>
              <ThemeProvider theme={theme}>
                <Typography
                  variant='h5'
                  sx={{
                    fontStyle: "italic",
                    fontSize: "1.5rem",
                    padding: "1rem",
                    width: "auto",
                    marginTop: "1rem",
                    textAlign: "center",
                  }}>
                  Looking for advice before you head off to your freshman year
                  of college? Here is the best college advice for freshman that
                  will make it so much easier.
                </Typography>
              </ThemeProvider>
              <Grid item>
                <ButtonBase sx={{ width: "800px", height: "500px" }}>
                  <Img alt='complex' src='tips/goal.jpg' />
                </ButtonBase>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: "30%",
            }}>
            <Typography
              sx={{
                marginBottom: "10rem",
                fontStyle: "italic",
                textAlign: "center",
              }}>
              This post is all about college advice for freshman.
            </Typography>
            <Typography
              sx={{
                marginBottom: "2rem",
                marginLeft: "5rem",
              }}>
              TABLE OF CONTENTS:
            </Typography>
            <ButtonGroup
              sx={{
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#0D1116" : "#f5f5f5",
                },
              }}
              orientation='vertical'
              aria-label='Vertical button group'
              variant='text'>
              {buttons}
            </ButtonGroup>
          </Paper>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction='column' spacing={2}>
            <Grid item>
              <Typography
                variant='h6'
                sx={{
                  padding: "0.5rem",
                  width: "90%",
                  textAlign: "center",
                  marginLeft: "5rem",
                }}>
                Every college student remembers how nervous they were before
                their freshman year. I can tell you first hand I was absolutely
                terrified. Leaving all your friends from home and going to a
                place you essentially know no one is very intimidating. Coming
                from a recent college graduate, I also remember being scared
                ?-less. But, looking back I was anxious over nothing and ended
                up meeting the best friends and making the most fun memories.
                Although going to college is scary, it is also really exciting
                and a great place to meet new friends and begin your career
                path. Because I have been through college, I am here to give you
                all my best advice - from being successful in school to making
                life long friends your freshman year of college.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction='column'
          spacing={2}
          sx={{ marginBottom: "2rem" }}>
          <ThemeProvider theme={theme}>
            <Typography
              variant='h5'
              sx={{
                fontStyle: "italic",
                fontSize: "1.5rem",
                padding: "1rem",
                width: "auto",
                marginTop: "1rem",
                marginBottom: "1rem",
                textAlign: "center",
                color: "#173992",
              }}>
              Tips for decoration in your dormitory room and living room
            </Typography>
          </ThemeProvider>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Tips;
