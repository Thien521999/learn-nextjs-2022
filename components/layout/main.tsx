import { LayoutProps } from "@/models/index";
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import { Footer, Header } from "../common";

export default function MainLayout({ children }: LayoutProps) {
  // useEffect(() => {
  //   console.log("MainLayout mounting");

  //   return () => console.log("MainLayout unmounting");
  // }, []);

  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        {/* <Container maxWidth="sm" sx={{ bgcolor: "primary.main" }}>
          SM Container
        </Container>

        <Container sx={{ bgcolor: "primary.main" }}>MD Container</Container> */}

        {children}
      </Box>

      <Footer />
    </Stack>
  );
}
