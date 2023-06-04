import email from '../../assets/images/email.png'
import clock from '../../assets/images/clockFooter.png'
import place from '../../assets/images/place.png'
import phone from '../../assets/images/phone.png'
export default function FooterContacts (){
    return(
        <div className="contacts">
            <p>
                <img src={email} alt=""/>
                allodoc@mail.com
            </p>
            <p>
                <img src={place} alt=""/>
                Moscova. str. Lenina 54, biroul 51
            </p>
            <p>
                <img src={clock} alt=""/>
                09:00 - 18:00
            </p>
            <p>
                <img src={phone} alt=""/>
                8 800 555 35 35
            </p>
        </div>
    )
}