import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export const ContactButton = () => {
	return (
		<Link href={"/contact"}>
			<Button
				sx={{
					backgroundColor: "#616161",
				}}
				variant='contained'
				size='small'>
				Contact us
			</Button>
		</Link>
	);
};
