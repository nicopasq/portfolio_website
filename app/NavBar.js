import { Button, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { cinzel, faunaOne } from "./ui/fonts";
import githubLogo from '@/app/images/gitHubLogo.png'
import linkedinLogo from '@/app/images/linkedinLogo.png'

export default function NavBar(){
    return (
        <Paper elevation={5} id="navBar">
            <Typography variant="h4" className={cinzel.className} sx={{marginLeft:'1%', marginTop:'.5%'}}>Nico.dev</Typography>        
            <Link href={`https://github.com/nicopasq`}>
                <img src={githubLogo.src} className="navIcon"/>                
            </Link>
            <Link href={`https://www.linkedin.com/in/nicohpasq/`}>
                <img src={linkedinLogo.src} className="navIcon"/>                
            </Link>
            <Link href='/contact'>
                <Button variant="filled" className={faunaOne.className} id="contactNavBar">Contact</Button>
            </Link>
        </Paper>
    )
}