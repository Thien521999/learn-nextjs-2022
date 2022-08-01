import { Work } from "@/models/work";
import { Box, Divider } from "@mui/material";
import React, { Fragment } from "react";
import WorkCard from "./work-card";

export interface WorkListProps {
  workList: Work[];
}

export const WorkList = ({ workList }: WorkListProps) => {
  if (workList.length === 0) return null;
  return (
    <div>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </div>
  );
};
