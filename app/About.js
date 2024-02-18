import { Container, Typography } from "@mui/material";
import React from "react";
import { cinzel, faunaOne } from "./ui/fonts";
import  '@/app/globals.css'

function About(){
    return(
        <Container className="aboutContainer">
            <Typography variant="h3" className={cinzel.className}>
                About
            </Typography>
            <Typography variant="h6" className={faunaOne.className} sx={{marginTop:'2%'}}>
                Hi, I'm Nico Pasquariello. I am a fullstack software developer from Colorado, and recent graduate from Flatirons School.
                I'm passonate about creating applications that are not only visually pleasing but also highly functional and user-friendly. 
                I'm always learning and growing as a programmer. Feel free to check out some of my projects below!
            </Typography>
        </Container>
    )
}

export default About;