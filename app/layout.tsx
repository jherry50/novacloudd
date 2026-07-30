import "./globals.css";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "NovaCloud",
  description: "Manage your business from one intelligent platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${inter.variable} min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}