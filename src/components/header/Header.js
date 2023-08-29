import React from 'react';
import {Link} from "react-router-dom";
import './style.css'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-box">
                    <Link to='/'><h2>movie db</h2></Link>
                    <nav className={'nav-link'}>
                        <Link to="/">Фильмы</Link>
                        <Link to="/genres">Жанры</Link>
                        <Link to="/">Сериалы</Link>
                        <Link to="/">ТВ</Link>
                        <Link to="/">О Нас</Link>
                    </nav>
                    <div className="search-panel">
                        <input type="text"/>
                        <button className={'btn btn-search'}>Search</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;