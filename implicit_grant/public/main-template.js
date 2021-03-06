/**
 * Шаблон главной страницы
 */
let main_page = `
    <div class="fake-header"></div>
    <header class="header">
      <div class="button-container">
        <button type="button" class="btn-header-back btn-header"></button>
        <button type="button" class="btn-header-forward btn-header"></button>
      </div>
      <button type="button" class="profile-header">
        <div class="profile-header-logo">
          <svg width="16" height="16" viewBox="0 0 18 20">
            <path fill="#ffffff" d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z"></path>
          </svg>
        </div>
        <span class="profile-name">nikita</span>
      </button>
    </header>

    <div class="fake-aside"></div>
    <aside class="main-aside">
      <a href="#" class="ref-main-page">
        <img class="main-logo" src="main_logo_white.svg" alt="официальное лого Spotify">
      </a>

      <nav class="aside-main-nav">
        <a href="#" class="ref-nav-main nav-font hover-white-delay">
          <svg class="logo-house">
            <path fill="#ffffff" d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path>
          </svg>
          <span class="aside-nav-description" style="color: white;">Главная</span>
        </a>
        <a href="search.html" class="ref-nav-main nav-font hover-white-delay">
          <svg class="logo-house">
            <path fill="#aeaeae" d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
          </svg>
          <span class="aside-nav-description">Поиск</span>
        </a>
        <a href="#" class="ref-nav-main nav-font hover-white-delay">
          <svg class="logo-house">
            <path fill="#aeaeae" d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
          </svg>
          <span class="aside-nav-description">Моя медиатека</span>
        </a>
      </nav>

      <div class="playlist-btns">
        <button type="button" class="create-playlist aside-container-style">
          <svg class="svg-aside svg-aside-plus">
            <path fill="#000" d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path>
          </svg>
          <span class="nav-font hover-white-delay">Создать плейлист</span>
        </button>
        <button type="button" class="favorite-tracks aside-container-style">
          <svg class="svg-aside svg-aside-heart">
            <path fill="#aeaeae" d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path>
          </svg>
          <span class="nav-font hover-white-delay">Любимые треки</span>
        </button>
      </div>

      <ul class="playlists playlist-font">
        <a href="#" class="my-playlist hover-white"><li >Мой плейлист №8</li></a>
        <a href="#" class="my-playlist hover-white"><li >Brennan Savage: микс</li></a>
        <a href="#" class="my-playlist hover-white"><li >Lil peep</li></a>
        <a href="#" class="my-playlist hover-white"><li >Мой плейлист №1</li></a>
        <a href="#" class="my-playlist hover-white"><li >Мой плейлист №1</li></a>
        <a href="#" class="my-playlist hover-white"><li >Мой плейлист №1</li></a>
        <a href="#" class="my-playlist hover-white"><li >Мой плейлист №1</li></a>
        <a href="#" class="my-playlist hover-white"><li >Мой плейлист №1</li></a>
        <a href="#" class="my-playlist hover-white"><li >Мой плейлист №1</li></a>
        
      </ul>

      <a class="download-app hover-white-delay">
        <svg width="24" height="24" fill="#000000" style="margin-right: 15px;">
          <path fill="#9d9d9d" d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
          <path fill="#9d9d9d" d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"></path>
        </svg>
        <span>Установить прилож...</span>
      </a>
    </aside>

    <main class="main">

      <section class="section-start-content">
        <h2 class="start-main-content-title"></h2>
        <div class="start-main-content"></div>
      </section>

      <section>
        <div class="section-head-container">
          <a href="#" class="section-head" style="color: white;"><h2>Выпуски для тебя</h2></a>
          <a href="#" class="section-head-all" style="color: #b2b2b2;"><span>ВСЕ</span></a>
        </div>
        <div class="section-content"></div>
      </section>

      <section>
        <div class="section-head-container">
          <a href="#" class="section-head" style="color: white;"><h2>Популярные альбомы</h2></a>
          <a href="#" class="section-head-all" style="color: #b2b2b2;"><span>ВСЕ</span></a>
        </div>
        <div class="section-content popular-albums"></div>
      </section>
    </main>


    <footer class="footer">
      <div class="track-info">
        <img width="56" height="56" src="images/7.jpg" alt="IVOXYGEN - room">
        <div class="track-info-head">
          <a href="#" class="plaing-track-name">room</a>
          <a href="#" class="plaing-track-autor hover-white">IVOXYGEN</a>
        </div>
        <button type="button" class="plaing-track-like plaing-track btn-hover-white">
          <svg viewBox="0 0 16 16" width="16" height="16">
            <path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path>
          </svg>
        </button>
        <button type="button" class="plaing-track-toggle plaing-track btn-hover-white" >
          <svg width="16" height="16">
            <path  d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"></path>
            <path  d="M10 8h4v3h-4z"></path>
          </svg>
        </button>
      </div>

      <div class="track-panel">
        <div class="control-btns-container">
          <div class="control-btns">
            <button type="button" class="random-tracks control-btn btn-hover-white">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path>
                <path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path>
              </svg>
            </button>
            <button type="button" class="previous-track control-btn btn-hover-white">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path>
              </svg>
            </button>
            <button type="button" class="play-stop-btn">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path fill="#000" d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path>
              </svg>
            </button>
            <button type="button" class="next-track control-btn btn-hover-white">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path>
              </svg>
            </button>
            <button type="button" class="repeat-track control-btn btn-hover-white">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path>
              </svg>
            </button>
          </div>
          <div class="time-panel">
            <div class="time-start time-text">
              1:03
            </div>
            <div class="time-track"></div>
            <div class="time-thumb"></div>
            <div class="time-end time-text">
              3:36
            </div>
          </div>  
        </div>
      </div>

      <div class="additional-btns">
        <div class="additional-btns-container">
          <button type="button" class="show-text-btn control-btn btn-hover-white">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
            </svg>
          </button>
          <button type="button" class="show-queue-btn control-btn btn-hover-white">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path>
            </svg>
          </button>
          <button type="button" class="show-device-btn control-btn btn-hover-white">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path d="M8 13a1 1 0 100-2 1 1 0 000 2z"></path>
              <path d="M4.75 0A1.75 1.75 0 003 1.75v12.5c0 .966.784 1.75 1.75 1.75h6.5A1.75 1.75 0 0013 14.25V1.75A1.75 1.75 0 0011.25 0h-6.5zM4.5 1.75a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25h-6.5a.25.25 0 01-.25-.25V1.75z"></path>
            </svg>
          </button>
          <button type="button" class="toggle-volume-btn control-btn">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path fill="#464646" d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path>
              <path fill="#464646" d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path>
            </svg>
          </button>
          <div class="volume-thumb"></div>
          <button type="button" class="open-full-screen-btn control-btn btn-hover-white">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path d="M6.53 9.47a.75.75 0 010 1.06l-2.72 2.72h1.018a.75.75 0 010 1.5H1.25v-3.579a.75.75 0 011.5 0v1.018l2.72-2.72a.75.75 0 011.06 0zm2.94-2.94a.75.75 0 010-1.06l2.72-2.72h-1.018a.75.75 0 110-1.5h3.578v3.579a.75.75 0 01-1.5 0V3.81l-2.72 2.72a.75.75 0 01-1.06 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </footer>
    <div class="fake-footer"></div>
`

export default main_page;
