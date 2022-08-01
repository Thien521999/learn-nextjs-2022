import { Post } from "@/models/post";
import { Work } from "@/models/work";
import { Container, Stack, Typography, Link as MuiLink } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import { WorkList } from "../work";
import { PostCard } from "./post-card";

export function FeatureWorks() {
  const workList: Work[] = [
    {
      id: "1",
      title: "Designing Dashboards",
      createdAt: "1659310798024",
      updatedAt: "1659310798024",
      tagList: ["web", "mobile"],
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/dmj3asaf3/image/upload/v1658227110/ioana-ye-auZEhgtzF7o-unsplash_qo2xdh.jpg",
    },
    {
      id: "2",
      title: "Vibrant Portraits of 2020",
      createdAt: "1659310798024",
      updatedAt: "1659310798024",
      tagList: ["React, Flutter"],
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/dmj3asaf3/image/upload/v1658226790/omar-shabana-S91_VFi1nck-unsplash_4_ncz0of.jpg",
    },
    {
      id: "3",
      title: "36 Days of Malayalam type",
      createdAt: "1659310798024",
      updatedAt: "1659310798024",
      tagList: ["React, Flutter"],
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/dmj3asaf3/image/upload/v1648962369/cld-sample.jpg",
    },
  ];

  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5" mb={4}>
          Featured works
        </Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
