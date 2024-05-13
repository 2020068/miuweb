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
import Fresh from "./Fresh/Fresh";
import Social from "./Social/Social";
import Survive from "./Survive/Survive";
import Success from "./Success/Success";
import Breadcrumb from "../../pages/visit/breadcrumb";
import { useTranslation } from "react-i18next";

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
  <Button key='one'>ADVICE FOR NEW COLLEGE STUDENTS</Button>,
  <Button key='two'>COLLEGE TIPS FOR SUCCESS IN CLASS</Button>,
  <Button key='three'>HOW TO SURVIVE FRESHMAN IN DORM</Button>,
  <Button key='four'>HOW TO MAKE FRIENDS IN COLLEGE</Button>,
];

const Tips: React.FC = () => {
  const { t } = useTranslation();
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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
            backgroundImage: "url('aboutPage/aboutpage/graduation.jpg')",
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
                {t("tips.Tips.title")}
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        <Breadcrumb
          homeElement={"Home"}
          separator={
            <span
              style={{
                fontSize: "0.8rem",
                fontFamily: "Arial, sans-serif",
                margin: "0 0.4rem",
                lineHeight: "1.6rem",
              }}>
              {"\u27A4\u200B"}
            </span>
          }
          containerClasses={" "}
          listClasses={" "}
          activeClasses={" "}
          capitalizeLinks={false}
        />
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
                  {t("tips.Tips.description")}
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
                marginBottom: "5rem",
                fontStyle: "italic",
                textAlign: "center",
              }}>
              {t("tips.Tips.advice")}
            </Typography>
            <Typography
              sx={{
                marginBottom: "1rem",
                marginLeft: "5rem",
              }}>
              {t("tips.Tips.content")}
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
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  onClick={() => handleScrollToSection(`section-${index}`)}>
                  {button}
                </Button>
              ))}
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
                {t("tips.Tips.explain")}
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
              {t("tips.Tips.tips")}
            </Typography>
          </ThemeProvider>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </Grid>
        <div id='section-0'>
          <Fresh />
        </div>
        <div id='section-1'>
          <Success />
        </div>
        <div id='section-2'>
          <Survive />
        </div>
        <div id='section-3'>
          <Social />
        </div>
      </Grid>
    </Grid>
  );
};

export default Tips;
