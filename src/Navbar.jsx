import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Button from '@mui/material/Button';
import MicExternalOnRounded from '@mui/icons-material/MicExternalOnRounded';


function Navbar()
{

    return <nav className="nav">
        <Link to="/" id="site-title">Project Template</Link>
            <ul>
                <CustomLink to="/about">About us</CustomLink>
                <li className ="dropdown">
                    EMPTY
                </li>
            </ul>
    </nav>
}

function CustomLink({to, children, ...props})
{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
   
    return (
        <li className ={isActive ? "active" : ""} >
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
export default Navbar
