import { Container, Typography } from "@mui/material";
import { arefRuqaa, cinzel, faunaOne } from "./ui/fonts";
import '@/app/ui/styles/home.css'
import scrollDown from '@/app/images/scrollDown.png'
import formatedIcons from "./ui/icons";
import About from "./About";


export default function Home() {
  return (
    <Container id="home">
      <div id="homeMainTxt">
        <Typography variant="h3" className={cinzel.className}>Hello, I'm Nico Pasquariello</Typography>
        <Typography variant="h3" className={cinzel.className}>Fullstack Software Developer.</Typography>
      </div>
      <div  id="homeSubTxt">
        <p className={faunaOne.className}>I am a highly motivated and detail-oriented developer with experience in building responsive web applications using React.js and Ruby on Rails APIs.</p>
      </div>

      <div id="techStack">
        <Typography variant="h6" className={faunaOne.className}><strong>Tech Stack:</strong></Typography>
        {formatedIcons}
      </div>

        <About/>
    </Container>
  )
}
