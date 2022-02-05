import { Box } from "@mui/material";
import React from "react";

export interface HeaderMobileProps {}

export function HeaderMobile(props: HeaderMobileProps) {
  return <Box display={{ xs: "block", lg: "none" }}>Header Mobile</Box>;
}
