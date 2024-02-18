import { Card } from "@mui/material";
import React from "react";
import '@/app/ui/styles/home.css'
import { Button } from "@mui/base";
import { cinzel } from "./ui/fonts";

function Projects(){
    return(
        <div className="projectsContainer">
            <Card className="projectCard">
                Project 1
            </Card>
            <Card className="projectCard">
                Project 2
            </Card>
            <Card className="projectCard">
                Project 3
            </Card>

            <p className={cinzel.className} style={{textAlign:'center'}}>See More</p>
        </div>
    )
}


export default Projects;