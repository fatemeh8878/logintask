import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import Down from "../../assets/image/down.svg";
import Line from "../Chart/Line";

import styles from "./style.module.scss";
const CardTree = () => {
  return (
    <div>
      <Card className={styles.cardTree}>
        <Grid container>
          <Grid item xs={8}>
            <Typography className={styles.titleCard}>
              نمودار تعدا کل پرونده ها
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <div className={styles.des1}>
              مشاهده به صورت : ماهیانه
              <img src={Down} />
            </div>
          </Grid>
        </Grid>
        <div className={styles.div}>
          <div
            className={styles.time}
            style={{
              marginLeft: 20,
            }}
          >
            <Typography className={styles.p}>
              از:<span>1400/11/19</span>
            </Typography>
            <Typography className={styles.p}>
              تا:<span>1400/12/18</span>
            </Typography>
          </div>
        </div>
        <div>
          <Line />
        </div>
      </Card>
    </div>
  );
};

export default CardTree;
