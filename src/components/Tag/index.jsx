/* eslint-disable react/prop-types */
//import '../../../style.css'
import style from '../Tag/Tag.module.scss'

export default function Tag ({tag}) {

    return (
        <ul className={style.rentalTitle__tag}>
            <li>{tag}</li>
        </ul>
    )
}

