/** @format */

import React from "react";
import Link from "next/link";
import FastRewindTwoToneIcon from "@mui/icons-material/FastRewindTwoTone";
import { Grid, Box, Typography, CardMedia } from "@mui/material";
import DBuiling from "./CCElements/DBuilding";
import MBuilding from "./CCElements/MBuilding";
import MIS from "./CCElements/MIS";
import Dormitory from "./CCElements/Dorm";
import SC from "./CCElements/SC";
import { EmblaOptionsType } from "embla-carousel";
import Button from "@mui/material/Button";

interface Category {
  Id: string;
  Name: string;
}

const catType: Category[] = [
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
    <Grid container>
      <Grid
        item
        className='campus-container'
        xs={12}
        sx={{
          borderBottom: "solid 2px #173992",
        }}>
        {/* <Grid item xs={12}>
          <Grid container alignItems='center' justifyContent='flex-start'>
            <Link href='..'>
              <Button sx={{ backgroundColor: "#173992", color: "white" }}>
                <FastRewindTwoToneIcon />
              </Button>
            </Link>
          </Grid>
        </Grid> */}
      </Grid>
      <Grid item xs={12}>
        {/* Main Content */}
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} lg={6}>
            <Typography variant='h2' sx={{ color: "#173992" }}>
              About Campus
            </Typography>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} lg={6}>
            <Grid container spacing={3}>
              {catType.map((category: Category) => (
                <Grid key={category.Id} item xs={12}>
                  <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderLeft: "solid 2px #173992", mt: 2, ml: 2 }}>
                      <Typography variant='h3' sx={{ color: "#173992" }}>
                        {category.Name}
                      </Typography>
                    </Box>
                    <Box sx={{ maxWidth: "100%" }}>
                      {renderCategoryComponent(category.Id)}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const renderCategoryComponent = (categoryId: string) => {
  switch (categoryId) {
    case "1":
      return <DBuiling slides={SLIDES} options={OPTIONS} />;
    case "2":
      return <SC slides={SLIDES} options={OPTIONS} />;
    case "3":
      return <MBuilding slides={SLIDES} options={OPTIONS} />;
    case "4":
      return <MIS slides={SLIDES} options={OPTIONS} />;
    case "5":
      return <Dormitory slides={SLIDES} options={OPTIONS} />;
    default:
      return null;
  }
};

export default Campus;
