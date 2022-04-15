import { Layout, Row, Col } from 'antd';
import { useAuth } from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from 'store/slices/userSlice';
import logo from '../../img/logo.svg';

const { Header } = Layout

const CustomHeader = () => {
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch()

    const menuItems = [
        {
            id: 0,
            path: '/news',
            title: 'Новости',
        },
    ]

    return (
        <Header>
            <Row>
                <Col>
                    <Link to="/">
                        <img src={logo} alt='Profilance Group'/>
                    </Link>
                </Col>
                {
                    menuItems.map(item => {
                        return <Col key={item.id}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </Col>
                    })
                }
                <Col>
                    {
                        isAuth ? (
                            <button onClick={() => dispatch(removeUser())}>
                                Выход из аккауна {email}
                            </button>
                         ) : (
                            <Link to="/login">
                                Вход
                            </Link>
                         )
                    }
                </Col>
            </Row>
        </Header>
    )
}

export default CustomHeader