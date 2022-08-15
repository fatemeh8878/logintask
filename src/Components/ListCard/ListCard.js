import { List, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import styles from "./style.module.scss"
const ListCard = ({ icon, title, number }) => {
  return (
    <div>
      <List className={styles.list}>
        <ListItemIcon>
          <img src={icon} />
        </ListItemIcon>
        <p>{number}</p>
        <ListItemText primary={title} className={styles.title}/>
      </List>
    </div>
  );
};

export default ListCard;
