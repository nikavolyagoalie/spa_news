import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: 'news',
    initialState: [
        {
            id: 1,
            header: 'Моя первая новость',
            text: 'У пользователя должна быть возможность добавить новость. У админа должна быть возможность одобрить новость или удалить. По умолчанию созданная пользователем новость не является одобренной.Гость должен видеть только одобренные админом новости. Гость не может создавать или одобрять новости.',
            date: '15.3.2022',
            approve: true,
            sorted: false,
        },

        {
            id: 2,
            header: 'Новость вторая',
            text: 'Для упрощения работа выполняется без серверной части, начальная инициализация новостей задается в константе, правильные логин и пароль пользователей так же задаются константой.Вся верстка должна быть выполнена с использованием БЭМ и SASS/SCSS. В списке новостей нужно сделать, чтобы для десктопной версии выводилось по 2 новости в строке, а в мобильной по одной.',
            date: '15.3.2022',
            approve: true,
            sorted: false,
        },

        {
            id: 3,
            header: 'Третья..с firebase',
            text: 'В процессе выполнения задания аутентификацию выполнял с помощью firebase. Так вот инетерсно стало...',
            date: '15.3.2022',
            approve: false,
            sorted: false,
        }
    ],
    reducers: {
        addNewsItem: (state, action) => {
            const newsItem = {
                id: Date.now,
                header: action.payload.header,
                text: action.payload.text,
                date: action.payload.date,
                approve: false,
                sorted: false,
            };
            state.unshift(newsItem)
        },

        toggleApprove: (state, action) => {
            const idx = state.findIndex(newsItem => newsItem.id === action.payload.id)
            state[idx].approve = action.payload.approve
        },

        deleteNewsItem: (state, action) => {
            return state.filter(newsItem => newsItem.id !== action.payload.id)
        }
    }
})

export const { addNewsItem, toggleApprove, deleteNewsItem } = newsSlice.actions
export default newsSlice.reducer