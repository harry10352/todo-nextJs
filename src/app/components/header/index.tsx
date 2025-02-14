import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { name } = props;
  return (
    <AppBar position="fixed" style={{ zIndex: "9999" }}>
      <Toolbar>
        <Typography variant="h6">{name}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
