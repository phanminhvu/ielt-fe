import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { useState } from "react";
import AdminBreadcrumbs from "./AdminBreadcrumbs";
import AdminDrawer from "./AdminDrawer";

const drawerWidth = 240;

interface IDefaultAdminLayout {
  children: any;
}

export default function DefaultAdminLayout({ children }: IDefaultAdminLayout) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <AdminBreadcrumbs />
        </Toolbar>
      </AppBar>
      <AdminDrawer />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, marginTop: '64px' }}>
        {children}
      </Box>
    </Box>
  );
}
