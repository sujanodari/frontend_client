import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import { useForm } from "react-hook-form";
import { IEducationBackground } from "../../interfaces/IUser";

interface IProps {
  handleEducationBackground: (
    educationBackground: IEducationBackground
  ) => void;
}

export const EducationalBackground = (props: IProps) => {
  const { register, handleSubmit, errors } = useForm<IEducationBackground>();

  return (
    <>
      <Grid item xs={12} sm={12}>
        <Typography className="typography-text">
          Add Education Background
        </Typography>
      </Grid>

      <Grid item xs={6} sm={6}>
        <Typography className="typography-text">Organization</Typography>
        <TextField
          type="text"
          fullWidth
          name="organization"
          variant="outlined"
          className="textfield-input"
          inputProps={{
            ref: register({
              required: "You must specify the organization.",
            }),
          }}
        />

        {errors.organization && (
          <Alert className="error-alert" severity="error">
            {errors.organization.message}
          </Alert>
        )}
      </Grid>
      <Grid item xs={6} sm={6}>
        <Typography className="typography-text">Level</Typography>
        <TextField
          type="text"
          fullWidth
          name="level"
          variant="outlined"
          className="textfield-input"
          inputProps={{
            ref: register({
              required: "You must specify the level.",
            }),
          }}
        />
        {errors.level && (
          <Alert className="error-alert" severity="error">
            {errors.level.message}
          </Alert>
        )}
      </Grid>
      <Grid item xs={6} sm={6}>
        <Typography className="typography-text">Start Year</Typography>
        <TextField
          type="number"
          fullWidth
          name="startYear"
          variant="outlined"
          className="textfield-input"
          inputProps={{
            ref: register({
              required: "You must specify the start year.",
              min: {
                value: 0,
                message: "Start Year can not be negative.",
              },
            }),
          }}
        />
        {errors.startYear && (
          <Alert className="error-alert" severity="error">
            {errors.startYear.message}
          </Alert>
        )}
      </Grid>
      <Grid item xs={6} sm={6}>
        <Typography className="typography-text">End Year</Typography>
        <TextField
          type="number"
          fullWidth
          name="endYear"
          variant="outlined"
          className="textfield-input"
          inputProps={{
            ref: register({
              required: "You must specify the end year.",
              min: {
                value: 0,
                message: "end Year can not be negative.",
              },
            }),
          }}
        />
        {errors.endYear && (
          <Alert className="error-alert" severity="error">
            {errors.endYear.message}
          </Alert>
        )}
      </Grid>
      <Grid item xs={12} sm={12}>
        <Button
          type="submit"
          className="user-button"
          onClick={handleSubmit(props.handleEducationBackground)}
        >
          Add Education Background
        </Button>
      </Grid>
    </>
  );
};
