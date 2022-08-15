import { Card, Typography } from "@mui/material";
import React from "react";
import Icon1 from "../../assets/image/1.svg";
import styles from "./style.module.scss";
const CardItem = ({ icon, color, title }) => {
  return (
    <div  className={styles.root}>
      <Card className={styles.card} style={color}>
        <img src={icon} />
      </Card>
      <Typography>{title}</Typography>
    </div>
  );
};

export default CardItem;
