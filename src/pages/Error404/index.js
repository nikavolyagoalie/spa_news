import { Link } from "react-router-dom";

const Error404 = () => {

    return (
        <>
            <div className="error404">
                <h2>Такой страницы не существует</h2>
                <button className="error404__button button">
                    <Link to="/">На главную</Link>
                </button>
            </div>
        </>
    )
}

export default Error404

