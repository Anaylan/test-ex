import { Container, AppBar, Box, Typography, Toolbar } from "@mui/material";
import Link from "next/link";
import { ContactButton } from "../ContactButton";

export const Header = () => {
	return (
		<AppBar
			position='sticky'
			variant={"outlined"}
			sx={{ backdropFilter: "blur(25px)" }}
			color='transparent'>
			<Container>
				<Toolbar sx={{ paddingLeft: "0" }}>
					<Link
						href={"/"}
						style={{ textDecoration: "none !important", color: "inherit" }}>
						<Typography
							variant='h1'
							sx={{ textDecoration: "none !important" }}
							fontSize={"1.5rem"}>
							SomeCompany
						</Typography>
					</Link>
					<Box sx={{ marginLeft: "auto" }}>
						<ContactButton />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
