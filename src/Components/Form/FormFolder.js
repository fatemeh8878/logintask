import { Card, Grid, TextField, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import Selected from "../Inputs/Select";
import { useForm, Controller } from "react-hook-form";
import { FormControl, FormHelperText, Button, FormLabel } from "@mui/material";
import Down from "../../assets/image/arrow-down.svg";
import Select from "@mui/material/Select";
import {
  OutlinedInput,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Data } from "./Data";
import styles from "./styleForm.module.scss";
import Calender from "../../assets/image/calendar-circle.svg";
import clock from "../../assets/image/clock.svg";
import axios from "axios";
import { FiEye, FiEyeOff, FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormFolder = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    Watch,
    resetField,
    setValue,
  } = useForm({
    mode: "onChange",
  });
  const [option, setOption] = useState();
  const [selected, setSelected] = useState({
    branch: "",
    adjuster: "",
  });
  useEffect(() => {
    axios
      .get(
        "https://estate-api.iranianpooshesh.com/portal/adjuster/59/file_detail/?state=in_progress",
        {
          headers: {
            Authorization: "jwt " + localStorage.getItem("access_token"),
          },
        }
      )
      .then((response) => setOption(response.data));
    setValue("file", 59); // ✅ performant
    setValue("is_active", true); // ✅ performant
  }, []);

  const options = {
    headers: {
      Authorization: "jwt " + localStorage.getItem("access_token"),
    },
  };
  const onSubmit = (data) => {
    axios
      .post(
        "https://estate-api.iranianpooshesh.com/portal/adjuster/59/visit/",
        data,
        options
      )
      .then(
        (response) =>
          response.status === 201 &&
          toast.success("با موفقیت ثبت شد", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
          })
      );
    reset();
  };
  return (
    <div>
      <div className={styles.iconBack}>
        <IconButton onClick={() => navigate("../")}>
          <FiHome />
        </IconButton>
      </div>
      <Card className={styles.cardFolder}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Data.map((item) =>
              item.type === "select" ? (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Controller
                    control={control}
                    name={item.name}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <FormControl
                        error={Boolean(errors[item.name])}
                        className={styles.selectForm}
                      >
                        <FormLabel style={{ color: "#000" }}>
                          {item.title}
                        </FormLabel>
                        <Select
                          displayEmpty
                          value={value || ""}
                          onChange={onChange}
                          IconComponent={() => (
                            <img src={Down} style={{ marginLeft: 10 }} />
                          )}
                          {...register(item.name, item.register)}
                          size="small"
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem disabled value="">
                            <em>انتخاب کنید</em>
                          </MenuItem>
                          <MenuItem value={option?.branch.id}>
                            {option?.branch.name}
                          </MenuItem>
                        </Select>
                        <FormHelperText>
                          {Boolean(errors[item.name]) &&
                            errors[item.name].message}
                        </FormHelperText>
                      </FormControl>
                    )}
                  />
                </Grid>
              ) : item.type === "select1" ? (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Controller
                    control={control}
                    name={item.name}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <FormControl
                        className={styles.selectForm}
                        error={Boolean(errors[item.name])}
                      >
                        <FormLabel style={{ color: "#000" }}>
                          {item.title}
                        </FormLabel>
                        <Select
                          displayEmpty
                          value={value || ""}
                          IconComponent={() => (
                            <img src={Down} style={{ marginLeft: 10 }} />
                          )}
                          {...register(item.name, item.register)}
                          size="small"
                          onChange={onChange}
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem disabled value="">
                            <em>انتخاب کنید</em>
                          </MenuItem>
                          <MenuItem value={option?.adjuster.id}>
                            {option?.adjuster.full_name}
                          </MenuItem>
                        </Select>
                        <FormHelperText>
                          {Boolean(errors[item.name]) &&
                            errors[item.name].message}
                        </FormHelperText>
                      </FormControl>
                    )}
                  />
                </Grid>
              ) : item.type === "text" ? (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  {/* <FormControl className={styles.formText}> */}
                  <FormControl
                    error={Boolean(errors[item.name])}
                    className={styles.formText}
                  >
                    <FormLabel>{item.title}</FormLabel>
                    <OutlinedInput
                      size="small"
                      {...register(item.name, item.register)}
                      error={Boolean(errors[item.name])}
                      endAdornment={
                        <InputAdornment
                          position="end"
                          className={styles.LineInput}
                        >
                          <span></span>
                          <Typography>ریال</Typography>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText>
                      {Boolean(errors[item.name]) && errors[item.name].message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              ) : item.type === "date" ? (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  {/* <FormControl  className={styles.formDate}> */}
                  <FormControl error={Boolean(errors[item.name])}>
                    <FormLabel>{item.title}</FormLabel>
                    <OutlinedInput
                      className={styles.formtime}
                      size="small"
                      placeholder="روز - ماه - سال"
                      {...register(item.name, item.register)}
                      error={Boolean(errors[item.name])}
                      endAdornment={
                        <InputAdornment
                          position="end"
                          className={styles.LineInput}
                        >
                          <img src={Calender} />
                        </InputAdornment>
                      }
                    />
                    <FormHelperText>
                      {Boolean(errors[item.name]) && errors[item.name].message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              ) : item.type === "time" ? (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  {/* <FormControl  className={styles.formtime}> */}
                  <FormControl error={Boolean(errors[item.name])}>
                    <FormLabel>{item.title}</FormLabel>
                    <OutlinedInput
                      className={styles.formtime}
                      error={Boolean(errors[item.name])}
                      size="small"
                      placeholder="00 : 00 : 00"
                      {...register(item.name, item.register)}
                      endAdornment={
                        <InputAdornment
                          position="end"
                          className={styles.LineInput}
                        >
                          <img src={clock} />
                        </InputAdornment>
                      }
                      // error={Boolean(errors.password)}
                    />

                    <FormHelperText>
                      {Boolean(errors[item.name]) && errors[item.name].message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              ) : item.type === "dec" ? (
                <Grid item xs={12} key={item.id}>
                  {/* <FormControl className={styles.formnumber}> */}
                  <FormControl error={Boolean(errors[item.name])}>
                    <FormLabel>{item.title}</FormLabel>
                    <TextField
                      className={styles.dec}
                      error={Boolean(errors[item.name])}
                      size="small"
                      {...register(item.name, item.register)}

                      // error={Boolean(errors.password)}
                    />
                    <FormHelperText>
                      {Boolean(errors[item.name]) && errors[item.name].message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              ) : (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  {/* <FormControl className={styles.formnumber}> */}
                  <FormControl error={Boolean(errors[item.name])}>
                    <FormLabel>{item.title}</FormLabel>
                    <OutlinedInput
                      className={styles.formtime}
                      error={Boolean(errors[item.name])}
                      size="small"
                      {...register(item.name, item.register)}
                      endAdornment={
                        <InputAdornment
                          position="end"
                          className={styles.LineInput}
                        >
                          <span></span>
                          <Typography>km</Typography>
                        </InputAdornment>
                      }
                      // error={Boolean(errors.password)}
                    />
                    <FormHelperText>
                      {Boolean(errors[item.name]) && errors[item.name].message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              )
            )}
          </Grid>
          <Button className={styles.submitButton} type="submit">
            ثبت
          </Button>
        </form>
      </Card>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default FormFolder;
