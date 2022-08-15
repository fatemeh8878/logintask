import React from "react";
import styles from "./style.module.scss";
import Logo from "../../assets/image/logo.png";
import ListMenu from "../ListMenu/ListMenu";
import { ListItem } from "./ListItem";
import HeaderList from "../Header-Left/HeaderList";
import { Grid, Hidden, IconButton } from "@mui/material";
import { FiMenu } from "react-icons/fi";
import Mobile from "./HeaderMobile";
const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerToggleClose = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={styles.root}>
      <div className={styles.headerRight}>
        <Hidden mdUp>
          <IconButton className={styles.iconmenu} onClick={handleDrawerToggle}>
            <FiMenu />
          </IconButton>
        </Hidden>
        <img src={Logo} className={styles.logoImg} />
        <Hidden mdDown>
          {ListItem.map((item) => (
            <ListMenu
              key={item.id}
              title={item.title}
              icon={item.icon}
              to={item.to}
            />
          ))}
        </Hidden>
      </div>
      <div className={styles.headerLeft}>
        <HeaderList />
      </div>
      <Mobile
        open={mobileOpen}
        toggleDrawer={handleDrawerToggle}
        handleClickOpen={() => setMobileOpen(false)}
        handleDrawerClose={handleDrawerToggleClose}
      />
    </div>
  );
};

export default Header;
