import Link from 'next/link'
import 'react-day-picker/lib/style.css' //only imported here to prevent Link from not working

const House = props => {
    return (
        <Link href='/houses/[id]' as={'/houses/' + props.id}>
            <a>
                <img src={props.picture} width='100%' alt='House Picture' />
                <p>{props.type} - {props.town}</p>
                <p>
                    {props.title}
                </p>
                <p>
                    {props.rating} ({props.reviewsCount})
                </p>
            </a>
        </Link>
    )
}

export default House
