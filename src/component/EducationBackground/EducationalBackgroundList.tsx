import React from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { IEducationBackground } from "../../interfaces/IUser";

interface IProps {
  educationBackground: [IEducationBackground];
}

export const EducationalBackgroundList = (props: IProps) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography className="typography-text">
          Educational BackGround
        </Typography>
      </Grid>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Organization</TableCell>
              <TableCell align="right">Level</TableCell>
              <TableCell align="right">Start Year</TableCell>
              <TableCell align="right">End Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.educationBackground.map((educationBackground, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {educationBackground.organization}
                </TableCell>
                <TableCell align="right">{educationBackground.level}</TableCell>
                <TableCell align="right">
                  {educationBackground.startYear}
                </TableCell>
                <TableCell align="right">
                  {educationBackground.endYear}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
