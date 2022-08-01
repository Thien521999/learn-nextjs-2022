import { Post } from "@/models/post";
import { Container, Stack, Typography, Link as MuiLink } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import { PostCard } from "./post-card";

export function RecentPosts() {
  const postList: Post[] = [
    {
      id: "1",
      title: "Chao ngay moi",
      publishedDate: "1659310798024",
      tagList: ["web", "mobile"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: "2",
      title: "Thu hai la ngay dau tuan",
      publishedDate: "1659310798024",
      tagList: ["React, Flutter"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="center"
        >
          <Typography variant="h5">Recent posts</Typography>
          <Link href="/blog" passHref>
            <MuiLink sx={{ display: { xs: "none", md: "inline" } }}>
              View all
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={3}
          sx={{
            "& > div": {
              width: {
                xs: "100%",
                md: "50%",
              },
            },
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
