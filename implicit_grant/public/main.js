import { setPageTitle, shuffle } from './page-format-functions.js';
import { renderCardsOnPage } from './request-function.js'
import { ids } from './data/data.js'
import main_page from './main-template.js'

function main(auth) {

    /**
     * Отрисовка шаблона главной страницы
     */
    let page = document.createElement('div');
    page.classList.add('app');
    page.innerHTML = main_page;
    document.getElementById('user-profile').append(page)

    let track_list = shuffle(ids.track_list);
    let episodes_list = shuffle(ids.episodes_list);
    let popular_albums_list = shuffle(ids.popular_albums_list);

    /**
     * Отрисовка основного контента страницы
     */
    renderCardsOnPage(6, 'tracks', track_list, 'StartMainContent');
    renderCardsOnPage(8, 'episodes', episodes_list, 'SectionContent');
    renderCardsOnPage(8, 'albums', popular_albums_list, 'PopularAlbums')

    /**
     * Установка преведственной фразы, в зависимости от времени суток
     */
    window.onload = () => {
        setPageTitle();
    }
}

export {main}