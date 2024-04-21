import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";


export default function DrawerCom() {
  const [open, setOpen] = useState(false);
 
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon/>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="drawer-link">
         <NavLink to="/" >Home</NavLink>
         <NavLink to="/about" >About</NavLink>
         <NavLink to="/projects" >Projects</NavLink>
         <NavLink to="/Contact" >Contact</NavLink>
        </div>
      </Drawer>
    </div>
  );
}
