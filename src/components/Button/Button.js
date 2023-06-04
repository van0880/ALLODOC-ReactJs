import { Link } from 'react-router-dom'


export default function Button (props){
    return(
        <>
            <Link to={props.link} className="buttonLink"style={props?.style}>
                {props.text}
            </Link>
        </>
    )
}