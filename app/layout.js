// "use client"
import "./styles/globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Attendo",
  description: "Get points every time you attend your school events!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} 

        
      </body>
    </html>
  );
}
