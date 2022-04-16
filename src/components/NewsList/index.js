import { useSelector } from "react-redux";
import NewsItem from "components/NewsItem";

const NewsList = () => {
    let news = useSelector(state => state.news);
    console.log(news)

    return (
        <div className="news">
            {
                news.map(item => (
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
    )
}

export default NewsList