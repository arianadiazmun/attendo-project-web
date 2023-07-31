// "use client"
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./shared/NavBar";
import EventList from "./admin/eventList";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Attendo",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <NavBar />
        <EventList />
      </body>
    </html>
  );
}
