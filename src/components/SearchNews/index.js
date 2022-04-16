import { useState } from "react"
import { useSelector } from 'react-redux'
import NewsItem from "../NewsItem"

const SearchNews = () => {
    const [findNewsElem, setFindNewsElem] = useState('')
    const news = useSelector(state => state.news)
    let [finded, setFinded] = useState(news);
    const handleFindNews = (e) => {
        setFindNewsElem(e.target.value)
    }

    const findNews = (e) => {
        e.preventDefault()

        if (findNewsElem === '') {
            setFinded([])
        } else {
            let find = news.filter(item => item.header.includes(findNewsElem))
            setFinded(find)
        }
    }

    return (
        <>
            <form onSubmit={findNews}>
                <input
                    value={findNewsElem}
                    onChange={handleFindNews}
                    placeholder="Поиск новости..."
                />
                <button type="submit">
                    Найти
                </button>
            </form>
            <div className="news__sorted">
                {
                    finded && finded.map(item => (
                        <NewsItem 
                            key={item.id} 
                            id={item.id}
                            header={item.header} 
                            text={item.text}
                            date={item.date} 
                            approve={item.approve}
                        /> 
                    ))
                }
            </div>
        </>
    )
}

export default SearchNews