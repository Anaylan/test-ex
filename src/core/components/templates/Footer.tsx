import { Box, Typography } from "@mui/material";
import React from "react";
import { FooterWrapper } from "./partials/FooterWrapper";

export const Footer = () => {
	return (
		<FooterWrapper>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					width: "100%",
					borderTop: "1px solid",
					borderColor: "divider",
					paddingY: 4,
				}}>
				<Typography variant='h2' fontSize={32}>
					Some Company {new Date().getFullYear()}
				</Typography>
			</Box>
		</FooterWrapper>
	);
};
