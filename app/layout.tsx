// "use client";
// // If we want to have some sort of interactive feature like a sign in button here, we need to turn it into a client component
// But its better to create a new component on the "leaves on the component tree" to add that interactivity. You should use server components as much as possible and add interactivity with client components only when needed, because this will keep your JavaScript bundle as small as possible, which will boost performance.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Link from "next/link";

import NavMenu from "./NavMenu";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Any code that you define there will be displayed on every page of the app, used for headers, footers...
// You can additionally nest layout files in directories and those layouts will only affect the pages and their children that are nested in those directories
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // This way we get access to user all over the app
    <AuthProvider>
      <html lang="en">
        {/* Comment out later, used for navigation Notes app */}
        {/* <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
          {children}
        </main>
      </body> */}
        <body className={inter.className}>
          <NavMenu />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
