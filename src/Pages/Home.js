import { Card, Grid } from "@mui/material";
import React from "react";
import bg from "../assets/image/bg.svg";
import bg1 from "../assets/image/bg1.svg";
import CardOne from "../Components/CardList/CardOne";
import CardTree from "../Components/CardList/CardTree";
import CardTwo from "../Components/CardList/CardTwo";
import Header from "../Components/Header/Header";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <div className={styles.root}>
      <Header />
      <CardOne />
      <div className={styles.card}>
        <Grid container>
          <Grid item md={4} sm={12}>
            <CardTwo />
          </Grid>
          <Grid item md={8} sm={12}>
            <CardTree />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
