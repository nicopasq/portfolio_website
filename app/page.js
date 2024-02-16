import { Paper } from "@mui/material";
import Link from "next/link";

export default function Home() {

  const links = ['About', 'Projects', 'Contact']

  const linkButtons = links.map((link, i) => {
    return (
      <Link key={i} className="link" href={`/${link.toLowerCase()}`}>{link}</Link>
    )
  })

  return (
    <Paper elevation={5} className="navBar">
      {linkButtons}
    </Paper>
  );
}
