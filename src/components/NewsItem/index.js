import { useAuth } from 'hooks/use-auth'
import { useDispatch } from 'react-redux'
import { toggleApprove, deleteNewsItem } from 'store/slices/newsSlice'

const NewsItem = ({id, header, date, text, approve}) => {
    const {email} = useAuth()
    const dispatch = useDispatch()

    const handleClickApprove = () => {
        dispatch(toggleApprove({id, approve: !approve}))
    }

    const handleDelete = () => {
        dispatch(deleteNewsItem({id}))
    }

    return (
        <>
            {
                (approve === true || email === 'admin@admin.com') && 
                <div className="news__item">
                    <span>
                        {
                            (email === 'admin@admin.com') && <input
                                type="checkbox"
                                checked={approve}
                                onClick={handleClickApprove}
                            />
                        }
                    </span>
                    <div className="news__wrapper">
                        <div className="news__header">{header}</div>
                        <div className="news__date">{date}</div>
                        <div className="news__text">{text}</div>
                    </div>
                    <div className="news__delete">
                        {
                            (email === 'admin@admin.com') && <button onClick={handleDelete}>Удалить</button>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default NewsItem