import { Button } from "@mui/material";
import "./globals.css";
import NavBar from "./NavBar";
import { inter } from "./ui/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nico.Dev</title>
      </head>
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
