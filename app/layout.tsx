import type { Metadata } from "next";
import "./globals.css";

import { font_body } from "./fonts";

export const metadata: Metadata = {
  title: "Sadie Lee",
  description: "Research Student at Mayo Clinic Platform, Cognitive Science & Data Science Student at UBC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font_body.className}
      >
        {children}
      </body>
    </html>
  );
}
