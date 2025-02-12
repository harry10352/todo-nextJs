import React from "react";
import { Container } from "@mui/material";
import Header from "../header";
import Sidebar from "../sidebar";

const DashboardContainer: React.FC<{
  children: React.ReactNode;
  name: string;
}> = ({ children, name }) => {
  return (
    <>
      <Header name={name} />
      <Sidebar />
      <Container
        maxWidth="lg"
        style={{ marginTop: "80px", marginLeft: "240px" }}
      >
        {children}
      </Container>
    </>
  );
};

export default DashboardContainer;
