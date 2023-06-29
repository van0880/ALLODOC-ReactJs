import clock from '../../assets/images/clock.png'
import calendarImg from '../../assets/images/calendar.png'
import videoImg from '../../assets/images/video.png'
export default function DoctorContacts({birth}) {
    return (
        <div>
            <p>
                <img src={calendarImg} alt="" />
                <span>{birth}</span>
            </p>
            <p>
                <img src={clock} alt="" />
                <span>16:00</span>
            </p>
            <p>
                <img src={videoImg} alt="" />
                <span>Chat</span>
            </p>
        </div>
    )
}