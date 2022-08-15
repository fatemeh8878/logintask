import React from "react";
import { Card, Grid } from "@mui/material";
import styles from "./style.module.scss";
import CardItem from "../CardItem/CardItem";
import { ListItem } from "./ListItem";
const CardOne = () => {
  return (
    <div>
      <Card className={styles.card}>
        <Grid container className={styles.grid}>
          {ListItem.map((item) => (
            <Grid
              item
              sm={3}
              xs={6}
              key={item.id}
              className={styles.item}
            >
              <CardItem
                icon={item.icon}
                color={{ background: item.color, margin: "auto" }}
                title={item.title}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
};

export default CardOne;
