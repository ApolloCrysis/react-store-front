import React from "react";
import { Container, Box } from "@mui/material";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Box minHeight={"100vh"} display={"flex"} flexDirection={"column"}>
      <Navbar />
      <Container maxWidth={false}>{children}</Container>
      <Footer />
    </Box>
  );
};
