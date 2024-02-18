import { Container, Typography } from "@mui/material";
import React from "react";
import { cinzel, faunaOne } from "./ui/fonts";
import  '@/app/globals.css'
import Projects from "./Projects";

function About(){
    return(
        <Container className="aboutContainer">
            <div className="aboutContent">
                <u><Typography variant="h3" className={cinzel.className}>
                    A Little About Me
                </Typography></u>
                <Typography variant="h6" className={faunaOne.className} sx={{marginTop:'2%', width:'50%'}}>
                    I am a fullstack developer from Colorado with a focus on React applications that communicate with an API, and utilize complex state management to create a responsive and user friendly experience. I recently graduated from Flatirons Software Engineering program and I'm always up for a challenge and am constantly looking for ways to improve myself as a developer! In my freetime I like to learn new code, enjoy the outdoors, and play music.
                </Typography>
            </div>
            <Projects/>
        </Container>
    )
}

export default About;