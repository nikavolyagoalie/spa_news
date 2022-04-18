import { useNavigate } from "react-router-dom"
import { useAuth } from 'hooks/use-auth'
import SearchNews from "../../components/SearchNews"

const News = () => {
    const navigate = useNavigate();
    const {email} = useAuth();

    return (
        <>
            <h2>Новости</h2>
            <div className="news area">
                <div className="news__add">
                    {
                        (email === 'admin@admin.com' || email === 'user@user.com') && <button className="news__add-button button" onClick={() => navigate('/news/add')}>Добавить новость</button>
                    }
                </div>
                <div className="news__search">
                    <SearchNews/>
                </div>
            </div>
        </>
    )
}

export default News

