import { Work } from "@/models/work";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

export interface WorkCardProps {
  work: Work;
}

export const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      <Box width={{ xs: "100%", md: "246px" }} flexShrink={0}>
        <Image
          src={work.thumbnailUrl}
          alt={work.title}
          width={246}
          height={180}
          layout="responsive"
        />
      </Box>
      <Box>
        <Typography variant="h4" fontWeight="bold">
          {work?.title}
        </Typography>

        <Stack direction="row" my={2}>
          <Chip
            color="secondary"
            label={format(Number(work.createdAt), "dd MMM yyyy")}
            size="small"
          />
          <Typography ml={3} color="GrayText">
            {work?.tagList.join(", ")}
          </Typography>
        </Stack>

        <Typography>{work?.shortDescription}</Typography>
      </Box>
    </Stack>
  );
};

export default WorkCard;
