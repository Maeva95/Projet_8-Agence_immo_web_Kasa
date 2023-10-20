import { Link, useRouteError } from "react-router-dom";
import style from './ErrorPage.module.scss'

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error)
    return (
        <div className={style.error}>
            <h1>404</h1>
            <p>{`Oups! La page que vous demandez n'existe pas.`}</p>
            <Link to='/'>{`Retourner à la hpage d'Accueil`}</Link>
        </div>
    )
}