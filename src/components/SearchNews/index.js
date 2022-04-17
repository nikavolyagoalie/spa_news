import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import NewsItem from "components/NewsItem"

const SearchNews = () => {
    const [findNewsElem, setFindNewsElem] = useState('')

    const news = useSelector(state => state.news)
    
    const handleFindNews = (e) => {
        setFindNewsElem(e.target.value)
    }

    const filteredNews = news.filter(newsItem => {
        return newsItem.header.toLowerCase().includes(findNewsElem.toLowerCase())
    })

    return (
        <>
            <form> 
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
                    filteredNews.map(item => (
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