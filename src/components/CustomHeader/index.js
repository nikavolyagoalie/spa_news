import { useAuth } from 'hooks/use-auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from 'store/slices/userSlice';
import logo from '../../img/logo.svg';
import exit from '../../img/close_2.svg'
import mobLogo from '../../img/sign_profilance.svg'

const CustomHeader = () => {
    const [open, isOpen] = useState(false)
    const { isAuth, email } = useAuth();
    const dispatch = useDispatch()

    const menuItems = [
        {
            id: 0,
            path: '/news',
            title: 'Новости',
        },
    ]

    const openMobMenu = () => {
        isOpen(true)
    }

    const closeMobMenu = (e) => {
        e.stopPropagation()
        isOpen(false)
    }

    return (
        <header className="header">
            <div className="header__row row">
                <div className="header__navs">
                    <div className="header__nav logo">
                        <Link to="/">
                            <img src={logo} alt='Profilance Group' />
                        </Link>
                    </div>
                    {
                        menuItems.map(item => {
                            return <div className="header__nav nav-item" key={item.id}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </div>
                        })
                    }
                </div>
                <div class="header__exit nav-exit">
                    {
                        isAuth ? (
                            <div className="header__exit-wrapper">
                                <button className="header__exit button" onClick={() => dispatch(removeUser())}>
                                    Выход
                                </button>
                                <div className="header__who">Вы вошли как <span>{email}</span></div>
                            </div>
                        ) : (
                            <Link to="/login" className="header__enter button">
                                <span>Вход</span>
                            </Link>
                        )
                    }
                </div>
                <div className="header__burger burger" onClick={openMobMenu}>
                    <span className='burger-elem first'></span>
                    <span className='burger-elem second'></span>
                    <span className='burger-elem third'></span>
                </div>
            </div>
            <div className={open ? "mobMenu" : "mobMenu hide"}>
                <div className='exit' onClick={closeMobMenu}>
                    <img src={exit} alt='Закрыть меню' width={20} height={20} />
                </div>

                <div className="header__navs">
                    <div className="header__nav logo">
                        <Link to="/" onClick={closeMobMenu}>
                            <img src={mobLogo} width={70} height={68} alt='Profilance Group' />
                        </Link>
                    </div>
                    {
                        menuItems.map(item => {
                            return <div className="header__nav mob_nav" key={item.id}>
                                <Link to={item.path} onClick={closeMobMenu}>
                                    {item.title}
                                </Link>
                            </div>
                        })
                    }
                </div>
                <div class="header__exit">
                    {
                        isAuth ? (
                            <div className="header__exit-wrapper">
                                <button className="header__exit button" onClick={() => dispatch(removeUser())}>
                                    Выход
                                </button>
                                <div className="header__who">Вы вошли как <span>{email}</span></div>
                            </div>
                        ) : (
                            <Link to="/login" className="header__enter button" onClick={closeMobMenu}>
                                <span>Вход</span>
                            </Link>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default CustomHeader