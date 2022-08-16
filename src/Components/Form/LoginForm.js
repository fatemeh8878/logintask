import {
  Card,
  FormControl,
  OutlinedInput,
  IconButton,
  InputAdornment,
  FormHelperText,
  Typography,
  FormLabel,
  Button,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./styleForm.module.scss";
import { useCookies } from "react-cookie";
import { FiEye, FiEyeOff, FiHome } from "react-icons/fi";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  let navigate = useNavigate();
  const [type, setType] = useState("password");
  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    resetField,
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
  });
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("../", { replace: true });
    }
  }, []);
  const onSubmit = (data) => {
    axios
      .post("https://estate-api.iranianpooshesh.com/api/token/", data)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);
          setTimeout(navigate("../", { replace: true }), 10000);
        }
      })
      .catch((err) =>
        toast.error("نام کاربری یا رمز ورود اشتباه است", {
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
  const handleClick = () => {
    setType((prev) => (prev === "password" ? "text" : "password"));
  };
  return (
    <div>
      <div className={styles.iconBack}>
        <IconButton onClick={() => navigate("../")}>
          <FiHome />
        </IconButton>
      </div>
      <Card className={styles.card}>
        <Typography className={styles.title}>ورود</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form}>
            <FormControl>
              <FormLabel>نام کاربری</FormLabel>
              <TextField
                error={Boolean(errors.username)}
                {...register("username", {
                  required: { value: true, message: "الزامی است" },
                })}
                className={styles.inputUser}
                size="small"
                helperText={Boolean(errors.username) && errors.username.message}
              />
            </FormControl>
            <FormControl>
              <FormLabel>پسورد</FormLabel>
              <OutlinedInput
                size="small"
                className={styles.inputPassword}
                type={type}
                {...register("password", {
                  required: { value: true, message: "الزامی است" },
                })}
                endAdornment={
                  <InputAdornment position="end">
                    {type === "password" ? (
                      <IconButton onClick={() => handleClick()}>
                        <FiEye style={{ fontSize: 20 }} />
                      </IconButton>
                    ) : type === "text" ? (
                      <IconButton onClick={() => handleClick()}>
                        <FiEyeOff style={{ fontSize: 20 }} />
                      </IconButton>
                    ) : (
                      ""
                    )}
                  </InputAdornment>
                }
                error={Boolean(errors.password)}
              />
              <FormHelperText error={Boolean(errors.password)}>
                {Boolean(errors.password) && errors.password.message}
              </FormHelperText>
            </FormControl>
          </div>
          <Button className={styles.submitButton} type="submit">
            ورود
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

export default LoginForm;
