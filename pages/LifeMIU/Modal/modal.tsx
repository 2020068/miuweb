/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));
interface FormModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function FormModal({ open, handleClose }: FormModalProps) {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  return (
    <div>
      <Grid container spacing={3}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: 24,
              maxWidth: "60%", // Adjust the width as needed
              width: "80rem",
              height: "60rem",
              padding: "1rem",
              overflowY: "auto",
              maxHeight: "70%",
            }}>
            <Typography
              sx={{
                fontFamily: "fantasy",
                fontStyle: "oblique",
                fontSize: "1.5rem",
              }}>
              Take a tutor
            </Typography>
            <FormGrid item md={6}>
              <FormLabel htmlFor='first-name' required>
                First name
              </FormLabel>
              <OutlinedInput
                id='first-name'
                name='first-name'
                type='name'
                placeholder='John'
                autoComplete='first name'
                required
              />
            </FormGrid>

            <FormGrid
              item
              md={6}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}>
              <FormLabel htmlFor='last-name' required>
                Last name
              </FormLabel>
              <OutlinedInput
                id='last-name'
                name='last-name'
                type='last-name'
                placeholder='Steve'
                autoComplete='last name'
                required
              />
            </FormGrid>

            <FormGrid item xs={6}>
              <FormLabel htmlFor='address1' required>
                Email address
              </FormLabel>
              <OutlinedInput
                id='address1'
                name='address1'
                type='address1'
                placeholder='Enter email address here'
                autoComplete='shipping address-line1'
                required
              />
            </FormGrid>

            <FormGrid item xs={6}>
              <FormLabel htmlFor='city' required>
                ID code
              </FormLabel>
              <OutlinedInput
                id='city'
                name='city'
                type='city'
                placeholder='Enter ID code here'
                autoComplete='City'
                required
              />
            </FormGrid>
            <FormGrid item xs={6}>
              <FormLabel htmlFor='state' required>
                Phone number
              </FormLabel>
              <OutlinedInput
                id='state'
                name='state'
                type='state'
                placeholder='Enter phone number here'
                autoComplete='State'
                required
              />
            </FormGrid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                alignItems: "center",
              }}>
              <FormGrid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      label='When would you like to visit?'
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </FormGrid>
              <FormGrid
                item
                xs={6}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "2rem",
                }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimeField", "TimeField"]}>
                    <TimeField
                      label='  Please choose appointment time'
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </FormGrid>
            </Grid>
            <FormGrid item xs={6} style={{ height: "10rem" }}>
              <FormLabel htmlFor='country' required>
                Additional information
              </FormLabel>
              <OutlinedInput
                id='country'
                name='country'
                type='country'
                placeholder='Question? anything you would like to know or ask'
                autoComplete='shipping country'
                required
                multiline // Allow multiline input
                rows={4} // Adjust the number of rows as needed
              />
            </FormGrid>
            <FormGrid item xs={12}>
              <FormControlLabel
                control={<Checkbox name='saveAddress' value='yes' />}
                label='By submitting this form, you agree to the Mongolia International University privacy notice.'
              />
            </FormGrid>
            <Button className='bg-blue-900 hover:bg-blue-500 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]'>
              Submit
            </Button>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
}
