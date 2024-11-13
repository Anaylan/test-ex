import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import StyledComponentsRegistry from "./registry";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body style={{ minHeight: "100vh" }}>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
