import { Link, useRouteError } from "react-router-dom";
import style from '../ErrorElement/ErrorElement.module.css'

export default function ErrorElement() {
    const error = useRouteError()
    console.log(error)
    return (
        <main className={style.error}>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n&#39;existe pas.</p>
            <Link to='/'>Retourner à la hpage d&#39;Accueil</Link>
        </main>
    )
}