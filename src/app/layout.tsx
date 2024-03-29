import type { Metadata } from "next";
import localFont from "@next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Pearl 2024",
	description: "Annual Cultural Fest of BITS Pilani, Hyderabad Campus",
	openGraph: {
		images: [
			{
				url: "/logo-og.png",
				alt: "Og Image Alt",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
