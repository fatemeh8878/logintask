import { Card, Grid } from "@mui/material";
import React, { useEffect } from "react";
import bg from "../assets/image/bg.svg";
import bg1 from "../assets/image/bg1.svg";
import CardOne from "../Components/CardList/CardOne";
import CardTree from "../Components/CardList/CardTree";
import CardTwo from "../Components/CardList/CardTwo";
import Header from "../Components/Header/Header";
import styles from "./Home.module.scss";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);
  let navigate = useNavigate();
  console.log(cookies.access_token);

  return (
    <div className={styles.root}>
      <Header />
      <CardOne />
      <div className={styles.card}>
        <Grid container>
          <Grid item md={5} sm={12}>
            <CardTwo />
          </Grid>
          <Grid item md={7} sm={12}>
            <CardTree />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
