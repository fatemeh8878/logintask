// mobile menu sidbar

import React from "react";
import { List, Drawer, Box, Toolbar, IconButton } from "@mui/material";
import { BiX } from "react-icons/bi";
import { ListItem } from "./ListItem";
import ListMenu from "../ListMenu/ListMenu";
import styles from "./style.module.scss"
const Mobile = ({
  toggleDrawer,
  open,
  t,
  handleDrawerClose,
  handleClickOpen,
}) => {
  return (
    <Box component="nav" aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={open}
        style={{ width: "280px !important" }}
        className={styles.mobile}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box" },
        }}
      >
        <div>
          <div>
            <div>
              {ListItem.map((item) => (
                <ListMenu
                  key={item.id}
                  title={item.title}
                  icon={item.icon}
                  to={item.to}
                />
              ))}
              {/* <List>
                {Data.documents.map((doc) => (
                  <ListMenu
                    key={doc.Id}
                    doc={doc}
                    handleClickOpen={() => handleClickOpen()}
                  />
                ))}
              </List> */}
            </div>
          </div>
        </div>
      </Drawer>
    </Box>
  );
};

export default Mobile;
