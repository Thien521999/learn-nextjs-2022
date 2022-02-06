import avatar from "@/images/img_avatar.png";
import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              fontWeight="bold"
              mb={{ xs: 3.5, md: 5 }}
            >
              Hi, I am John, <br /> Creative Technologist
            </Typography>
            <Typography mb={{ xs: 3.5, md: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              aliquam itaque quod quasi beatae dolore deleniti vel iure nisi
              aperiam dolores vitae animi consequuntur voluptatum dicta
              voluptatibus aliquid, provident id!
            </Typography>
            <Button variant="contained">Download Resume</Button>
          </Box>
          <Box
            sx={{
              minWidth: "240px",
              boxShadow: "-5px 13px ",
              color: "secondary.light",
            }}
          >
            <Image src={avatar} layout="responsive" alt="avatar" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
