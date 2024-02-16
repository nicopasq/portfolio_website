import { Typography } from "@mui/material";
import { faunaOne } from "./ui/fonts";

export default function Home() {
  return (
    <div id="home">
      <div id="homeTxt">
        <Typography variant="h3" className={faunaOne.className}>Hello, I'm Nico Pasquariello.</Typography>
        <Typography variant="h3" className={faunaOne.className}>Fullstack Software Developer</Typography>
      </div>
    </div>
  )
}
