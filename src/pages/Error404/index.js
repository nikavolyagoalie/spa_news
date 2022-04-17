import { Link } from "react-router-dom";

const Error404 = () => {

    return (
        <>
            <div>
                <h2>Такой страницы не существует</h2>
                <p>
                    <Link to="/">На главную</Link>
                </p>
            </div>
        </>
    )
}

export default Error404

