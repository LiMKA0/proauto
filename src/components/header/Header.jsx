import React from "react";
import { Link, useLocation } from "react-router-dom";

import './Header.scss';

import logo from 'assets/header/logo.svg';
import loop from 'assets/header/loop.svg';
import bugJunk from 'assets/header/bugJunk.svg';

import banner from 'assets/banner/mainPageBanner.jpg'


const Header = () => {

    const location = useLocation();

    const nameTitle = {
        '/main': 'НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ',
        '/main/catalog': 'НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ',
        '/main/service': 'ПРОФЕССИОНАЛЬНАЯ ПОМОЩЬ ВАШЕМУ АВТОМОБИЛЮ'
    }

    const title = nameTitle[location.pathname];

    return (
        <>
            <header>
                <img className="logoSvg" src={logo} alt="Logo" />
                <nav>
                    <Link to="/main">КОМПАНИЯ</Link>
                    <Link to="/main/catalog">КАТАЛОГ</Link>
                    <Link to="/main/service">УСЛУГИ</Link>
                    <Link>ИНФОРМАЦИЯ</Link>
                    <Link>КОНТАКТЫ</Link>
                </nav>
                <button>ЗАКАЗАТЬ ЗВОНОК</button>
                <div className="containerIcon">
                    <img src={loop} alt="" />
                    <img src={bugJunk} alt="" />
                    <div className="countBugList"></div>
                </div>
            </header>
            <div className="banner">
                <img src={banner} alt="" />
                <span>{title}</span>
                <button><Link to="/main/catalog">ПЕРЕЙТИ В КАТАЛОГ</Link></button>
                <div className="containerRectangle">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );

};

export default Header;