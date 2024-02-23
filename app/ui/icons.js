import jsLogo from '@/app/images/jsLogo.png'
import reactLogo from '@/app/images/reactLogo.png'
import reduxLogo from '@/app/images/reduxLogo.png'
import muiLogo from '@/app/images/muiLogo.png'
import rubyLogo from '@/app/images/rubyLogo.png'
import railsLogo from '@/app/images/railsLogo.png'
import htmlLogo from '@/app/images/htmlLogo.png'
import cssLogo from '@/app/images/css.png'
import postmanLogo from '@/app/images/postmanLogo.png'
import gitLogo from '@/app/images/gitLogo.png'

const icons = [jsLogo, reactLogo, reduxLogo, muiLogo, rubyLogo, railsLogo, htmlLogo, cssLogo, gitLogo, postmanLogo]


const formatedIcons = icons.map((icon, index) => {
    return (
        <img src={icon.src} className='techIcon' key={index}/>
    )
})


export default formatedIcons;