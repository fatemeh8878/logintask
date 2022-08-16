// selectinput

import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, FormHelperText, FormLabel } from "@mui/material";
import { TextField } from "@mui/material";
import Down from "../../assets/image/arrow-down.svg";
const Selected = (props) => {
  console.log(props.menuItem);

  return (
    <FormControl>
      <FormLabel style={{ color: "#000" }}>{props.placeholder}</FormLabel>
      <Select
        select
        IconComponent={() => <img src={Down} style={{ marginLeft: 10 }} />}
        // helperText={props.helperText}
        onChange={(e) => props.onChange(e)}
        // onBlur={props.onBlur}
        value="all"
        // name={props.name || ""}
        // labelId="demo-select-small"
        // error={props.error}
        // register={props.register}
        // id="demo-select-small"
        size="small"
        // defaultValue={props.defaultValue}
      >
        {/* {!props.loading ? ( */}
        <MenuItem value="all" style={{ direction: "rtl" }}>
          <em>انتخاب کنید</em>
        </MenuItem>
        <MenuItem value={props.value}>{props.menuItem}</MenuItem>
        <MenuItem value={props.value1}>{props.option}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selected;
