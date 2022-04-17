import { useNavigate } from "react-router-dom"
import { useAuth } from 'hooks/use-auth'
import SearchNews from "../../components/SearchNews"

const News = () => {
    const navigate = useNavigate();
    const {email} = useAuth();

    return (
        <>
            <h2>News</h2>
            <div className="news__find">
                <SearchNews/>
            </div>
            <div className="button__addNews">
                {
                    (email === 'admin@admin.com' || email === 'user@user.com') && <button onClick={() => navigate('/news/add')}>Добавить новость</button>
                }
            </div>
        </>
    )
}

export default News

