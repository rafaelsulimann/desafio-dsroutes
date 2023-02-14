import { Link, NavLink } from "react-router-dom";
import homeImg from '../../assets/home.svg';
import './styles.scss';

export default function Header(){
    return (
        <header className="header">
            <div className="container header-container">
                <div className="header-nav">
                    <div className="header-nav-routes">
                        <NavLink to="/home" className={({isActive}) => isActive ? "header-nav-routes-link active" : "header-nav-routes-link non-active"}>
                            Início
                        </NavLink>
                        <NavLink to="/products" className={({isActive}) => isActive ? "header-nav-routes-link active" : "header-nav-routes-link non-active"}>
                            Produtos
                        </NavLink>
                        <NavLink to="/about" className={({isActive}) => isActive ? "header-nav-routes-link active" : "header-nav-routes-link non-active"}>
                            Sobre nós
                        </NavLink>
                    </div>
                    <div className="header-nav-home">
                        <Link to="/home" className="header-nav-home-link">
                            <img src={homeImg} alt="Inicio" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}