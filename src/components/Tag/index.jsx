/* eslint-disable react/prop-types */
//import { PropTypes } from 'prop-types'
import '../../../style.css'

export default function Tag ({tag}) {

    return (
        <ul className="rentalTitle__tag">
            <li>{tag}</li>
        </ul>
    )
}

