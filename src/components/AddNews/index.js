import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewsItem } from "../../store/slices/newsSlice";
import { useNavigate } from "react-router-dom";

const AddNews = () => {
    const [header, setHeader] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerHeader = (e) => {
        setHeader(e.target.value)
    }

    const handlerText = (e) => {
        setText(e.target.value)
    }

    const addNews = (e) => {
        e.preventDefault()
        if (header && text) {
            dispatch(addNewsItem(
                {
                    header,
                    text,
                    date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`
                }
            ))
            setHeader('')
            setText('')
        }
        navigate('/news')
    }

    return (
        <div className="add_news">
            <form onSubmit={addNews}>
                <input
                    type="text"
                    value={header}
                    onChange={handlerHeader}
                />
                <textarea
                    type="text"
                    value={text}
                    onChange={handlerText}
                />
                <button type="submit">
                    Добавить
                </button>
            </form>
        </div>
    )
}

export default AddNews