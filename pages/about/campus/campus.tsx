/** @format */

import React from "react";
import Link from "next/link";
import FastRewindTwoToneIcon from "@mui/icons-material/FastRewindTwoTone";
import { Grid, Box, Typography } from "@mui/material";
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
  },
  {
    Id: "2",
    Name: "Sport complex",
  },
  {
    Id: "3",
    Name: "M Building",
  },
  {
    Id: "4",
    Name: "MIS",
  },
  {
    Id: "5",
    Name: "Dormitory",
  },
];

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Campus: React.FC = () => {
  return (
    <Grid>
      <Grid
        container
        sx={{
          backgroindColor: "white",

          // background: `linear-gradient(to right,
          //   #173992 0%,
          //   rgb(47, 132, 203) 10%,
          //   rgb(47, 132, 203, 0.8) 20%,
          //   rgb(47, 132, 203, 0.5) 40%,
          //   rgb(47, 132, 203, 0.5) 40%,
          //   rgb(47, 132, 203, 0.5) 60%,
          //   rgb(47, 132, 203, 0.5) 60%,
          //   rgb(47, 132, 203, 0.8) 80%,
          //   rgb(47, 132, 203, 0.8) 80%,
          //   #4cb8d8)`,
          borderBottom: "solid 2px #173992",
        }}
      >
        <Grid
          item
          className="campus-container"
          xs={12}
          sx={{
            borderBottom: "solid 2px #173992",
          }}
        >
          <Grid container justifyContent="flex-front">
            <Link href="..">
              <button className="campus-button bg-blue-900 hover:bg-blue-500 bg-opacity-80 text-white font-bold py-3 rounded-full mb-4 w-[100px]">
                <FastRewindTwoToneIcon />
              </button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            width: { lg: "100%", xs: "100vh" },

            marginTop: "50px",
          }}
        >
          <Grid container spacing={3} sx={{ marginBottom: "100px" }}>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ marginTop: "20px", marginBottom: "100px" }}
            >
              <Typography
                variant="h2"
                sx={{
                  marginLeft: { lg: "100px", xs: "0px" },
                  fontSize: "60px",
                  color: "#173992",
                  position: "sticky",
                  top: "200px",
                  marginBottom: { lg: "0", xs: "50px" },
                  WebkitTextStroke: "2px #173992",
                }}
              >
                About Campus
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        width: "600px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                      }}
                    >
                      <Box
                        sx={{
                          borderLeft: "solid 2px #173992",
                          marginTop: "30px",
                        }}
                      >
                        <Box sx={{ marginLeft: "30px" }}>
                          <Typography variant="h3">
                            {catType[0].Name}
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
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        width: "600px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                      }}
                    >
                      <Box
                        sx={{
                          borderLeft: "solid 2px #173992",
                          marginTop: "30px",
                        }}
                      >
                        <Box sx={{ marginLeft: "30px" }}>
                          <Typography variant="h3">
                            {catType[1].Name}
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
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        width: "600px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                      }}
                    >
                      <Box
                        sx={{
                          borderLeft: "solid 2px #173992",
                          marginTop: "30px",
                        }}
                      >
                        <Box sx={{ marginLeft: "30px" }}>
                          <Typography variant="h3">
                            {catType[2].Name}
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
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        width: "600px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                      }}
                    >
                      <Box
                        sx={{
                          borderLeft: "solid 2px #173992",
                          marginTop: "30px",
                        }}
                      >
                        <Box sx={{ marginLeft: "30px" }}>
                          <Typography variant="h3">
                            {catType[3].Name}
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
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        width: "600px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                      }}
                    >
                      <Box
                        sx={{
                          borderLeft: "solid 2px #173992",
                          marginTop: "30px",
                        }}
                      >
                        <Box sx={{ marginLeft: "30px" }}>
                          <Typography variant="h3">
                            {catType[4].Name}
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
