import { Link } from "react-router"

export default function NotFound() {
    return (
        <div className="not-found-container">
            <h1>К сожалению, страница, которую вы искали, не найдена.</h1>
            <Link to="/" className="link-button">Вернуться на главную</Link>
        </div>
    )
}