"use client";

import {
	FormControl,
	FormLabel,
	OutlinedInput,
	TextField,
	Box,
	Button,
	Alert,
	Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { contactSchema as contactValidationSchema } from "../schemas/contactSchema";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export const ContactForm = () => {
	const btnRef = useRef<HTMLButtonElement | null>(null);
	const router = useRouter();
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validationSchema: contactValidationSchema,
		async onSubmit(values) {
			btnRef.current?.setAttribute("disabled", "true");

			const res = await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify(values),
			}).finally(() => {
				btnRef.current?.removeAttribute("disabled");
			});

			const data = await res.json();
			console.log(data);
			router.push(`/contact?name=${data.name}`);
		},
	});
	return (
		<>
			<form
				onSubmit={formik.handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
				}}>
				<FormControl sx={{ mb: 2 }}>
					<FormLabel>Name</FormLabel>
					<OutlinedInput
						// required
						value={formik.values.name}
						onChange={formik.handleChange}
						type='text'
						name='name'
						placeholder='Robert'
					/>
				</FormControl>

				<FormControl sx={{ mb: 2 }}>
					<FormLabel>Email</FormLabel>
					<OutlinedInput
						// required
						value={formik.values.email}
						onChange={formik.handleChange}
						// type='email'
						name='email'
						placeholder='example@example.com'
					/>
				</FormControl>
				<FormControl sx={{ mb: 2 }}>
					<FormLabel>Message</FormLabel>
					<TextField
						// required
						value={formik.values.message}
						onChange={formik.handleChange}
						name='message'
						placeholder='Type your message...'
						variant='outlined'
					/>
				</FormControl>

				<Box display={"flex"} justifyContent={"center"} margin={1}>
					<Button
						ref={btnRef}
						type='submit'
						sx={{
							backgroundColor: "#616161",
						}}
						variant='contained'>
						Submit
					</Button>
				</Box>
				{formik.errors.email || formik.errors.message || formik.errors.name ? (
					<Alert severity='error'>
						{formik.errors.name ? (
							<Typography>{formik.errors.name}</Typography>
						) : (
							<></>
						)}
						{formik.errors.email ? (
							<Typography>{formik.errors.email}</Typography>
						) : (
							<></>
						)}
						{formik.errors.message ? (
							<Typography>{formik.errors.message}</Typography>
						) : (
							<></>
						)}
					</Alert>
				) : (
					<></>
				)}
			</form>
		</>
	);
};
