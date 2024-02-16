import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { cinzel, faunaOne } from "./ui/fonts";

export default function NavBar(){
    return (
        <div id="navBar">
            <Typography variant="h4" className={cinzel.className} sx={{marginLeft:'1%', marginTop:'.5%'}}>Nico.dev</Typography>        
            <Link href='/contact'>
                <Button variant="filled" className={faunaOne.className} id="contactNavBar">Contact</Button>
            </Link>
        </div>
    )
}