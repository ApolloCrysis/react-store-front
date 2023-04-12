import React from "react";
import { Container, Box } from "@mui/material";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box minHeight={"100vh"} display={"flex"} flexDirection={"column"}>
          {children}
          <Footer />
        </Box>
      </Container>
    </>
  );
};
