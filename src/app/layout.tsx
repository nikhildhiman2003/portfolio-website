
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nikhil Dhiman | Software Engineer",
    template: "%s | Nikhil Dhiman",
  },
  description:
    "Nikhil Dhiman is a Software Engineer building modern web applications and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
