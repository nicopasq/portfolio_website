import { Container, Typography } from "@mui/material";
import React from "react";
import { cinzel, faunaOne } from "./ui/fonts";

function About(){
    return(
        <Container className="pageContainer">
            <Typography variant="h3" className={cinzel.className}>
                About
            </Typography>
            <Typography variant="h6" className={faunaOne.className} sx={{marginTop:'5%'}}>
                Hi, I'm Nico Pasquariello. I am a fullstack software developer from Colorado.
                I'm passonate about creating applications that are not only visually pleasing but also highly functional and user-friendly. 
                I'm always learning and growing as a programmer. Feel free to check out some of my projects below!
            </Typography>
        </Container>
    )
}

export default About;