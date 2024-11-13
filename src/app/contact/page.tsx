import { Footer } from "@/core/components/templates/Footer";
import { Header } from "@/core/components/templates/Header";
import { Wrapper } from "@/core/components/templates/Wrapper";
import { Content } from "@/core/components/templates/Content";
import { Typography, Card } from "@mui/material";
import type { Metadata } from "next";
import { ContactForm } from "@/core/components/ContactForm";

export const metadata: Metadata = {
	title: "Contact page",
	description: "contact page test exercise",
};

export default async function Contacts({
	searchParams,
}: {
	searchParams: Promise<{ name: string }>;
}) {
	const { name } = await searchParams;
	return (
		<Wrapper>
			<Header />
			<Content
				style={{
					backgroundColor: "rgba(0, 0, 0, 0.12)",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}>
				{!name ? (
					<>
						<Typography variant='h1' textAlign='center' mb={4}>
							Only CTA on the page
						</Typography>
						<Card
							sx={{
								padding: 5,
								justifySelf: "center",
								transition: "all 1s ease",
								overflow: "hidden",
							}}>
							<ContactForm />
						</Card>
					</>
				) : (
					<Typography variant='h2' textAlign='center'>
						Thank you for your interest, {name}
					</Typography>
				)}
			</Content>
			<Footer />
		</Wrapper>
	);
}
