import { Link } from 'react-router-dom'
import logo  from '../../assets/images/logo.png'
import './header.css'
import Navbar from './Navbar'
import Notifics from './Notifics'
import TranslateButtons from './TranslateButtons'
import Menu from './Menu'
import vector from '../../assets/images/vector.png'
import { useState } from 'react'

function Header(){
    const [show, setShow] = useState(false)
    return (
        <header>
            <div className='container'>
                <div className='flex-between header_block'>
                    <div className="header_logo">
                        <Link to="/">
                            <img src={logo} alt=''/>
                        </Link>          
                    </div>
                    <div className='d-flex navbar'>
                        <Navbar/> 
                        <Notifics/>
                        <div className='section_menu'>
                            <div>
                                <span className='circle'>V</span>
                                <span  onClick={()=>{setShow(!show)}} >Vahan Ghazaryan  
                                    <img src={vector} alt=""className={show ? "menuVector" : null}/>  
                                </span>                                
                            </div>                         
                           <Menu show={show}/>
                        </div>     
                    </div>
                    <TranslateButtons/>
                </div>
            </div>
        </header>
    )
}

export default Header