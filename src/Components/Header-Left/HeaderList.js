import React from "react";
import {
  Hidden,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import user from "../../assets/image/user.svg";
import logout from "../../assets/image/exit.svg";
import styles from "./style.module.scss";
import { NavLink as NavLinkBase } from "react-router-dom";

const HeaderList = () => {
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
    <div className={styles.root}>
      <List className={styles.list}>
        <ListItemButton
          className={styles.button}
          component={myNavLink}
          to={"/login"}
        >
          <ListItemIcon className={styles.icon}>
            <img src={user} />
          </ListItemIcon>
          <ListItemText primary={"ثبت نام / ورود"} className={styles.title} />
        </ListItemButton>
        <Hidden mdDown>
          <ListItemButton className={styles.button}>
            <ListItemIcon className={styles.icon}>
              <img src={logout} />
            </ListItemIcon>
            <ListItemText primary={"خروج"} className={styles.title} />
          </ListItemButton>
        </Hidden>
      </List>
    </div>
  );
};

export default HeaderList;
