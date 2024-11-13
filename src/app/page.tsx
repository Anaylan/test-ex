import { Footer } from "@/core/components/templates/Footer";
import { Header } from "@/core/components/templates/Header";
import { Wrapper } from "@/core/components/templates/Wrapper";
import { Content } from "@/core/components/templates/Content";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import type { Metadata } from "next";
import { ContactButton } from "@/core/components/ContactButton";
import { headers } from "next/headers";

const video: { src: string; title: string } = {
	src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=mApvF42T6bSLSImT",
	title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
};

export const metadata: Metadata = {
	title: "Main page",
	description: "main page test exercise",
};

export default async function Home() {
	const headersList = headers();

	const proto = (await headersList).get("x-forwarded-proto");
	const hostname = (await headersList).get("x-forwarded-host");
	const data = await fetch(`${proto}://${hostname}/api/posts`);
	const posts = await data.json();
	return (
		<Wrapper>
			<Header />
			<Content>
				<Box sx={{ backgroundColor: "divider" }}>
					<Container sx={{ paddingY: 6 }}>
						<Grid
							container
							flexDirection={{ sm: "row" }}
							spacing={{ sm: 2, md: 4 }}
							sx={{
								overflow: "hidden",
							}}>
							<Grid
								size={{ xs: 12, sm: 6 }}
								sx={{
									paddingT: 8,
									paddingLeft: { sm: 4 },
									paddingBottom: { sm: 0, xs: 3 },
								}}>
								<Typography
									variant='h1'
									fontSize={{ sm: 46, xs: 38 }}
									sx={{ marginBottom: 1 }}>
									Most important title on the page
								</Typography>
								<Typography variant='body1' fontSize={{ sm: 14, xs: 16 }}>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
									nam ea quos ab nobis modi adipisci recusandae sequi eos
									laudantium pariatur esse, accusamus velit saepe omnis non id
									ducimus culpa!
								</Typography>
							</Grid>
							<Grid
								size={{ xs: 4, sm: 6 }}
								sx={{
									aspectRatio: "16/9 auto",
									flex: "1 1 auto",
									height: "max-content",
									overflow: "hidden",
								}}>
								<iframe
									width='100%'
									src={video.src}
									title={video.title}
									style={{
										border: "none",
										aspectRatio: "inherit !important",
									}}
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									referrerPolicy='strict-origin-when-cross-origin'
									allowFullScreen
									loading='lazy'
								/>
							</Grid>
						</Grid>
					</Container>
				</Box>
				<Container
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						mt: 6,
					}}>
					<Typography
						textAlign={"center"}
						mb={3}
						variant='h2'
						fontSize={{ sm: 42, xs: 36 }}>
						Also very important title
					</Typography>
					<Grid
						container
						spacing={{ sm: 6, xs: 4 }}
						sx={{
							"--Grid-borderWidth": "1px",
							"& > div": {
								border: "var(--Grid-borderWidth) solid",
								borderColor: "divider",
								borderRadius: 4,
								padding: 2,
							},
							flexDirection: "row",
						}}>
						{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
						{posts.map((data: any, key: number) => (
							<Grid key={key} size={{ md: 4, xs: 6 }}>
								<Typography variant='h5' sx={{ mb: 1 }}>
									{data.title}
								</Typography>
								<Typography variant='body1'>{data.body}</Typography>
							</Grid>
						))}
					</Grid>
					<Box sx={{ marginLeft: "auto", marginRight: "auto", marginY: 4 }}>
						<ContactButton />
					</Box>
				</Container>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						paddingTop: 6,
						paddingBottom: 4,
						backgroundColor: "divider",
					}}>
					<Typography
						variant='h3'
						textAlign={"center"}
						fontSize={{ sm: 40, xs: 30 }}>
						Less important title
					</Typography>
					<Box sx={{ marginLeft: "auto", marginRight: "auto", marginTop: 4 }}>
						<ContactButton />
					</Box>
				</Box>
			</Content>
			<Footer />
		</Wrapper>
	);
}
