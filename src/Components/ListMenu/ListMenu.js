import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "./style.module.scss";
import { NavLink as NavLinkBase } from "react-router-dom";

const ListMenu = ({ icon, title, to }) => {
  const myNavLink = React.forwardRef((props, ref) => (
    <NavLinkBase
      to={props.to}
      onClick={() => props.handleClickOpen()}
      ref={ref}
      className={({ isActive }) =>
        `${props.className} ${isActive ? props.active : ""}`
      }
    >
      {props.children}
    </NavLinkBase>
  ));
  return (
    <div>
      <List className={styles.list}>
        <ListItemButton
          className={styles.button}
          component={myNavLink}
          to={to}
          active={styles.activemenu}
        >
          <ListItemIcon className={styles.icon}>
            <img src={icon} />
          </ListItemIcon>
          <ListItemText
            primary={
              <div>
                <div className={styles.dividerBox}>
                  <span className={styles.divider}></span>
                </div>
                <p className={styles.p}>{title}</p>
              </div>
            }
            className={styles.title}
          />
        </ListItemButton>
      </List>
    </div>
  );
};

export default ListMenu;
