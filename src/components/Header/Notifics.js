import { Link } from 'react-router-dom'
import notifics from '../../assets/images/notif.png'

export default function Notifics (){
    return (
        <div className='header_notifics'>
             <Link to="/">
                <span>3</span>
                <img src={notifics} alt="notifics"/>
            </Link>
        </div>
    )
}