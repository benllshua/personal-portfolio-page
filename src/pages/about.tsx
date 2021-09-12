import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../components/Link";

/**
 * About page component
 * @return {JSX.Element} : The JSX for the About page
 */
export default function About(): JSX.Element {
	return (
		<Container maxWidth="sm">
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					Next.js with TypeScript example
				</Typography>
				<Link href="/">Go to the main page</Link>
			</Box>
		</Container>
	);
}
