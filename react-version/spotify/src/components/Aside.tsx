//import logo from './images/main_logo_white.svg';
import { NavLink } from "react-router-dom";

function Aside() {
  return (
    <aside className="main-aside">
      <NavLink to="/" className="ref-main-page">
          <img className="main-logo" src="{logo}" alt="официальное лого Spotify" />
      </NavLink>
      <nav className="aside-main-nav">
        <NavLink to="/" className="ref-nav-main nav-font hover-white-delay">
          <svg className="logo-house">
            <path fill="#ffffff" d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path>
          </svg>
          <span className="aside-nav-description">Главная</span>
        </NavLink>
        <NavLink to="/search" className="ref-nav-main nav-font hover-white-delay">
          <svg className="logo-house">
            <path fill="#aeaeae" d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
          </svg>
          <span className="aside-nav-description">Поиск</span>
        </NavLink>
        <a href="#" className="ref-nav-main nav-font hover-white-delay">
          <svg className="logo-house">
            <path fill="#aeaeae" d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
          </svg>
          <span className="aside-nav-description">Моя медиатека</span>
        </a>
      </nav>

      <div className="playlist-btns">
        <button type="button" className="create-playlist aside-container-style">
          <svg className="svg-aside svg-aside-plus">
            <path fill="#000" d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path>
          </svg>
          <span className="nav-font hover-white-delay">Создать плейлист</span>
        </button>
        <button type="button" className="favorite-tracks aside-container-style">
          <svg className="svg-aside svg-aside-heart">
            <path fill="#aeaeae" d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path>
          </svg>
          <span className="nav-font hover-white-delay">Любимые треки</span>
        </button>
      </div>

      <ul className="playlists playlist-font">
        <a href="#" className="my-playlist hover-white"><li >Мой плейлист №8</li></a>
        <a href="#" className="my-playlist hover-white"><li >Brennan Savage: микс</li></a>
        <a href="#" className="my-playlist hover-white"><li >Lil peep</li></a>
        <a href="#" className="my-playlist hover-white"><li >Мой плейлист №1</li></a>
        <a href="#" className="my-playlist hover-white"><li >Мой плейлист №1</li></a>
        <a href="#" className="my-playlist hover-white"><li >Мой плейлист №1</li></a>
        <a href="#" className="my-playlist hover-white"><li >Мой плейлист №1</li></a>
        <a href="#" className="my-playlist hover-white"><li >Мой плейлист №1</li></a>
        <a href="#" className="my-playlist hover-white"><li >Мой плейлист №1</li></a>
        
      </ul>

      <a className="download-app hover-white-delay">
        <svg width="24" className='svg-margin' height="24" fill="#000000">
          <path fill="#9d9d9d" d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
          <path fill="#9d9d9d" d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"></path>
        </svg>
        <span>Установить прилож...</span>
      </a>
    </aside>
  );
}

function FakeAside(){
  return (
    <div className="fake-aside"></div>
  );
}

export {Aside, FakeAside};
