import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import HttpClient from "../../services/Request";
import {
  ICreateUser,
  IEducationBackground,
} from "../../interfaces/IUser";
import { Controller, useForm } from "react-hook-form";
import { EducationalBackground } from "../../component/EducationBackground";
import { EducationalBackgroundList } from "../../component/EducationBackground/EducationalBackgroundList";
import { useHistory } from "react-router-dom";
import routes from "../../config/routes";

interface IProps { }

const AddUser = (props: IProps) => {
  const history = useHistory();
  const httpClient = new HttpClient();
  const [
    loadEducationBackgroundForm,
    setLoadEducationBackgroundForm,
  ] = useState(true);
  const [error, setError] = useState<string>();
  const [educationBackground, setLoadEducationBackground] = useState<[IEducationBackground]>();
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    getValues,
    control,
  } = useForm<ICreateUser>();

  useEffect(() => {
    register({ name: "educationBackground" });
  }, [register]);



  const handleEducationBackground = (
    newEducationBackground: IEducationBackground
  ) => {
    educationBackground?.length
      ? setValue("educationBackground", [
        ...educationBackground,
        newEducationBackground,
      ])
      : setValue("educationBackground", [newEducationBackground]);
    setLoadEducationBackground(getValues().educationBackground);
    setLoadEducationBackgroundForm(false);

  };

  const registerUser = async (userData: ICreateUser) => {
    const birthYear = new Date(getValues().dob).getFullYear();
    const thisYear = new Date().getFullYear();
    try {
      const response = await httpClient.post({
        endpoint: "/users",
        data: { ...userData, age: thisYear - birthYear },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      history.push(routes.Users);
    } catch (err) {
      if (err.message === "Request failed with status code 400") {
        setError("User already exist, please provide new email.");
      }
      else {
        setError(err.message);
      }

    }
  };

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <h2 className="heading">Register</h2>
      <Paper className="Paper">
        <div className="form">
          <form onSubmit={handleSubmit(registerUser)}>
            {error ? <Alert severity="error">{error}</Alert> : null}
            <Grid container spacing={4}>
              <Grid item xs={6} sm={6}>
                <Typography className="typography-text">Name</Typography>
                <TextField
                  type="text"
                  fullWidth
                  name="name"
                  variant="outlined"
                  className="textfield-input"
                  inputProps={{
                    ref: register({
                      required: "You must specify the name.",
                    }),
                  }}
                />
                {errors.name && (
                  <Alert className="error-alert" severity="error">
                    {errors.name.message}
                  </Alert>
                )}
              </Grid>



              <Grid item xs={6} sm={6}>

                <Typography className="typography-text">Phone</Typography>
                <TextField
                  type="number"
                  fullWidth
                  name="phone"
                  variant="outlined"
                  className="textfield-input"
                  inputProps={{
                    ref: register({
                      required: "You must specify the phone.",
                      minLength: {
                        value: 10,
                        message: "phone length must be 10 character long.",
                      },
                      maxLength: {
                        value: 10,
                        message: "phone length must be 10 character long.",
                      },
                    }),
                  }}
                />
                {errors.phone && (
                  <Alert className="error-alert" severity="error">
                    {errors.phone.message}
                  </Alert>
                )}
              </Grid>
              <Grid item xs={6} sm={6}>
                <Typography className="typography-text">Email</Typography>
                <TextField
                  type="email"
                  fullWidth
                  name="email"
                  variant="outlined"
                  className="textfield-input"
                  inputProps={{
                    ref: register({
                      required: "You must specify the email.",
                    }),
                  }}
                />
                {errors.email && (
                  <Alert className="error-alert" severity="error">
                    {errors.email.message}
                  </Alert>
                )}
              </Grid>
              <Grid item xs={6} sm={6}>
                <Typography className="typography-text">Address</Typography>
                <TextField
                  type="text"
                  fullWidth
                  name="address"
                  variant="outlined"
                  className="textfield-input"
                  inputProps={{
                    ref: register({
                      required: "You must specify the address.",
                    }),
                  }}
                />
                {errors.address && (
                  <Alert className="error-alert" severity="error">
                    {errors.address.message}
                  </Alert>
                )}
              </Grid>
              <Grid item xs={6} sm={6}>
                <Typography className="typography-text">DOB</Typography>
                <TextField
                  type="date"
                  fullWidth
                  name="dob"
                  variant="outlined"
                  className="textfield-input"
                  inputProps={{
                    ref: register({
                      required: "You must specify the dob.",
                    }),
                  }}
                />
                {errors.dob && (
                  <Alert className="error-alert" severity="error">
                    {errors.dob.message}
                  </Alert>
                )}
              </Grid>
              <Grid item xs={6} sm={6}>
                <Typography className="typography-text">Nationality</Typography>
                <TextField
                  type="text"
                  fullWidth
                  name="nationality"
                  variant="outlined"
                  className="textfield-input"
                  inputProps={{
                    ref: register({
                      required: "You must specify the nationality.",
                    }),
                  }}
                />
                {errors.nationality && (
                  <Alert className="error-alert" severity="error">
                    {errors.nationality.message}
                  </Alert>
                )}
              </Grid>
              <Grid item xs={6} sm={6}>
                <Typography className="typography-text">Gender</Typography>

                <Controller
                  rules={{ required: true }}
                  control={control}
                  defaultValue="male"
                  name="gender"
                  as={
                    <RadioGroup>
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                  }
                />

              </Grid>

              {
                educationBackground &&
                <EducationalBackgroundList educationBackground={educationBackground} />
              }
              {loadEducationBackgroundForm ? (
                <EducationalBackground
                  handleEducationBackground={handleEducationBackground}
                />
              )
                :
                (
                  <Grid item xs={12}>
                    <Button
                      onClick={(e: any) => setLoadEducationBackgroundForm(true)}
                      className="user-button"
                      variant="contained"
                    >
                      Add More
                    </Button>
                  </Grid>
                )
              }
              <Grid item xs={12}>
                <ButtonGroup
                  size="large"
                  aria-label="large outlined primary button group"
                  className="element-margin"
                >
                  <Button
                    type="submit"
                    className="user-button"
                    fullWidth
                    variant="contained"
                  >
                    Register
                    </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </form>
        </div>
      </Paper>
    </Container>
  );
};

export default AddUser;
