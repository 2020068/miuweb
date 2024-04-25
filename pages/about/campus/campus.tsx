/** @format */

import React from "react";
import Header from "@/components/header";
import Link from "next/link";
import FastRewindTwoToneIcon from "@mui/icons-material/FastRewindTwoTone";
import { Grid, Box, Typography, CardMedia } from "@mui/material";
import DBuiling from "./CCElements/DBuilding";
import MBuilding from "./CCElements/MBuilding";
import MIS from "./CCElements/MIS";
import Dormitory from "./CCElements/Dorm";
import SC from "./CCElements/SC";
import { EmblaOptionsType } from "embla-carousel";

const catType = [
  {
    Id: "1",
    Name: "D Building",
    About: "cafeteria, gilgal, main hall and library",
  },
  {
    Id: "2",
    Name: "Sport complex",
    About: "Gym, Fitness and running track",
  },
  {
    Id: "3",
    Name: "M Building",
    About: "Main office, financial, president office, etc.",
  },
  {
    Id: "4",
    Name: "MIS",
    About: "Main office, financial, president office, etc.",
  },
  {
    Id: "5",
    Name: "Dormitory",
    About: "Main office, financial, president office, etc.",
  },
];

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Campus: React.FC = () => {
  return (
    <Grid>
      <Header />
      <Grid
        container
        sx={{
          background: `linear-gradient(to right, 
                rgb(47, 112, 193), 
                rgba(47, 112, 193, 0.5) 20%, 
                rgba(47, 112, 193, 0.5) 20%, 
                rgba(47, 112, 193, 0.5) 40%, 
                rgba(47, 112, 193, 0.5) 40%, 
                rgba(47, 112, 193, 0.5) 60%, 
                rgba(47, 112, 193, 0.5) 60%, 
                rgba(47, 112, 193, 0.5) 80%, 
                rgba(47, 112, 193, 0.5)80%, 
                #4cb8d4)`,
        }}>
        <Grid item className='campus-container' xs={12}>
          <Grid container justifyContent='flex-front'>
            <Link href='..'>
              <button className='campus-button bg-blue-500 hover:bg-blue-700 bg-opacity-80 text-white font-bold py-3 rounded-full mb-4 w-[100px]'>
                <FastRewindTwoToneIcon />
              </button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ width: { lg: "100%", xs: "100vh" }, marginTop: "50px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} sx={{ marginTop: "50px" }}>
              <Typography
                variant='h2'
                sx={{
                  marginLeft: { lg: "200px", xs: "0px" },
                  fontSize: "50px",
                  color: "black",
                  position: "sticky",
                  top: "200px",
                  marginBottom: { lg: "0", xs: "20px" },
                  WebkitTextStroke: "3px rgb(47, 112, 193)",
                }}>
                About Campus
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box
                      sx={{
                        width: "600px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                      }}>
                      <Box
                        sx={{
                          borderLeft: "solid 2px rgb(47, 112, 193)",
                          marginTop: "30px",
                        }}>
                        <Box sx={{ marginLeft: "30px" }}>
                          <Typography variant='h3'>
                            {catType[0].Name}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant='h4'
                            sx={{ marginLeft: "30px", marginTop: "30px" }}>
                            {catType[0].About}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ maxWidth: "500px", position: "relative" }}>
                        <DBuiling slides={SLIDES} options={OPTIONS} />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box
                      sx={{
                        width: "600px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                      }}>
                      <Box
                        sx={{
                          borderLeft: "solid 2px rgb(47, 112, 193)",
                          marginTop: "30px",
                        }}>
                        <Box sx={{ marginLeft: "30px" }}>
                          <Typography variant='h3'>
                            {catType[1].Name}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant='h4'
                            sx={{ marginLeft: "30px", marginTop: "30px" }}>
                            {catType[1].About}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ maxWidth: "500px", position: "relative" }}>
                        <SC slides={SLIDES} options={OPTIONS} />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box
                      sx={{
                        width: "600px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                      }}>
                      <Box
                        sx={{
                          borderLeft: "solid 2px rgb(47, 112, 193)",
                          marginTop: "30px",
                        }}>
                        <Box sx={{ marginLeft: "30px" }}>
                          <Typography variant='h3'>
                            {catType[2].Name}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant='h4'
                            sx={{ marginLeft: "30px", marginTop: "30px" }}>
                            {catType[2].About}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ maxWidth: "500px", position: "relative" }}>
                        <MBuilding slides={SLIDES} options={OPTIONS} />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box
                      sx={{
                        width: "600px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                      }}>
                      <Box
                        sx={{
                          borderLeft: "solid 2px rgb(47, 112, 193)",
                          marginTop: "30px",
                        }}>
                        <Box sx={{ marginLeft: "30px" }}>
                          <Typography variant='h3'>
                            {catType[3].Name}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant='h4'
                            sx={{ marginLeft: "30px", marginTop: "30px" }}>
                            {catType[3].About}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ maxWidth: "500px", position: "relative" }}>
                        <MIS slides={SLIDES} options={OPTIONS} />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box
                      sx={{
                        width: "600px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                      }}>
                      <Box
                        sx={{
                          borderLeft: "solid 2px rgb(47, 112, 193)",
                          marginTop: "30px",
                        }}>
                        <Box sx={{ marginLeft: "30px" }}>
                          <Typography variant='h3'>
                            {catType[4].Name}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant='h4'
                            sx={{ marginLeft: "30px", marginTop: "30px" }}>
                            {catType[4].About}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ maxWidth: "500px", position: "relative" }}>
                        <Dormitory slides={SLIDES} options={OPTIONS} />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Campus;
