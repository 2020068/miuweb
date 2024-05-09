/** @format */

import React from "react";
import { Grid, Box, Typography, CardMedia } from "@mui/material";
import DBuiling from "./CCElements/DBuilding";
import MBuilding from "./CCElements/MBuilding";
import MIS from "./CCElements/MIS";
import Dormitory from "./CCElements/Dorm";
import SC from "./CCElements/SC";
import { EmblaOptionsType } from "embla-carousel";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import Link from "next/link";
import FastRewindTwoToneIcon from "@mui/icons-material/FastRewindTwoTone";
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
interface Category {
  Id: string;
  Name: string;
}

const catType: Category[] = [
  {
    Id: "1",
    Name: "about.category.dbuilding",
  },
  {
    Id: "2",
    Name: "about.category.sportcomplex",
  },
  {
    Id: "3",
    Name: "about.category.mbuilding",
  },
  {
    Id: "4",
    Name: "about.category.mis",
  },
  {
    Id: "5",
    Name: "about.category.dormitory",
  },
];

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Campus: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Grid container>
      <Grid
        item
        className='campus-container'
        xs={12}
        sx={{
          borderBottom: "solid 2px #173992",
        }}>
        <Box className='button flex flex-col items-start justify-start h-full'>
          <Link href='..'>
            <Button className='bg-blue-900 hover:bg-blue-500 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]'>
              <FastRewindTwoToneIcon />
            </Button>
          </Link>
          <Link href='../employee/employee'>
            <Button className='bg-blue-900 hover:bg-blue-500 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]'>
              <GroupTwoToneIcon />
            </Button>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {/* Main Content */}
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} lg={6}>
            <Typography variant='h2' sx={{ color: "#173992" }}>
              {t("about.campus.about")}
            </Typography>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} lg={6}>
            <Grid container spacing={2}>
              {catType.map((category: Category) => (
                <Grid key={category.Id} item xs={12}>
                  <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderLeft: "solid 2px #173992", mt: 2, ml: 2 }}>
                      <Typography variant='h3' sx={{ color: "#173992" }}>
                        {t(category.Name)}
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
