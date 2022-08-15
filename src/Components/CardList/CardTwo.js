import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./style.module.scss";
import Down from "../../assets/image/down.svg";
import { List } from "./ListItem";
import ListCard from "../ListCard/ListCard";
const CardTwo = () => {
  return (
    <div>
      <Card className={styles.cardTwo}>
        <Grid container>
          <Grid item xs={6}>
            <Typography className={styles.titleCard}>
              تعداد پرونده ها
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.des}>
              مشاهده به صورت : ماهیانه
              <img src={Down} />
            </div>
          </Grid>
        </Grid>
        <div className={styles.div}>
          <div className={styles.time}>
            <Typography className={styles.p}>
              از:<span>1400/11/19</span>
            </Typography>
            <Typography className={styles.p}>
              تا:<span>1400/12/18</span>
            </Typography>
          </div>
        </div>
        <div className={styles.list}>
          {List.map((item) => (
            <ListCard
              icon={item.icon}
              title={item.title}
              number={item.number}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CardTwo;
