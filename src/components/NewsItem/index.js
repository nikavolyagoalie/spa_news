import { useAuth } from 'hooks/use-auth'
import { useDispatch } from 'react-redux'
import { toggleApprove, deleteNewsItem } from 'store/slices/newsSlice'
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

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
                <div className="news_item">
                    <span>
                        {
                            (email === 'admin@admin.com') && <div className="news_item__approve">
                                <Checkbox
                                    icon={<Icon.FiCheck color="#ffb82d" size={14} />}
                                    name="my-input"
                                    checked={true}
                                    onChange={handleClickApprove}
                                    borderColor="#ffb82d"
                                    style={{ cursor: "pointer" }}
                                    labelStyle={{ marginLeft: 10, userSelect: "none" }}
                                    label="Одобрена"
                                    className="checkbox"
                                />
                            </div>
                        }
                    </span>
                    <div className="news_item__wrapper">
                        <div className="news_item__header item-block">{header}</div>
                        <div className="news_item__date item-block">{date}</div>
                        <div className="news_item__text item-block">{text}</div>
                    </div>
                    <div className="news_item__delete">
                        {
                            (email === 'admin@admin.com') && <button className="news_item__button button" onClick={handleDelete}>Удалить</button>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default NewsItem