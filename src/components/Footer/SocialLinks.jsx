import insta from '../../assets/images/instagram.png'
import fb from '../../assets/images/fb.png'
import youtube from '../../assets/images/youtube.png'
import appStore from '../../assets/images/appStore.png'
import play from '../../assets/images/play.png'

export default function SocialLinks() {
    return (
        <>
            <div className="socialLinks d-flex">
                <a href='https://facebook.com' target='blank'>
                    <img src={insta} alt="insta" />
                </a>
                <a href='https://facebook.com' target='blank'>
                    <img src={fb} alt="facebook" />
                </a>
                <a href='https://facebook.com' target='blank'>
                    <img src={youtube} alt="youtube" />
                </a> 
            </div>
            <div className="d-flex">
                <a href='https://facebook.com' target='blank'>
                    <img src={appStore} alt="insta" />
                </a>
                <a href='https://facebook.com' target='blank'>
                    <img src={play} alt="facebook" />
                </a>
            </div>
        </>

    )
}