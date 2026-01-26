import {React} from 'react'
import {FaHouseChimney} from "react-icons/fa6"
import {FaUserLarge} from "react-icons/fa6"
import {FaRegObjectUngroup} from "react-icons/fa6"
import {FaSpinner} from "react-icons/fa6"
import {Link} from "react-scroll"

function Header() {
    return ( 
            <div className='header py-2 d-flex justify-content-around align-items-center rounded-5'>
                <nav className='two'>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="p-1 mx-1 rounded-circle"><FaHouseChimney/></Link>
                    <Link to="about" spy={true} smooth={true} offset={-20} duration={500} className="p-1 mx-1 rounded-circle"><FaUserLarge/></Link>
                    <Link to="skills" spy={true} smooth={true} offset={-5} duration={500} className="p-1 mx-1 rounded-circle"><FaSpinner/></Link>
                    <Link to="project" spy={true} smooth={true} offset={-10} duration={500} className="p-1 mx-1 rounded-circle"><FaRegObjectUngroup/></Link>
                </nav>
            </div>
    )
}

export default Header;