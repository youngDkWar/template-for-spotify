/**
 * Выполняет обращение по заданному адресу @api_adress к API-spotify и отрисовывает контент на странице из полученных данных
 * @param {number} card_count - число карт, которые будут отрисованы на странице
 * @param {string} api_adress - тип запроса (tracks / episodes / albums)
 * @param {Array} ids_list - список ID элементов, которые будут отрисованы
 * @param {String} card_format - пометка, какой тип элемента будет отрисовываться (StartMainContent / SectionContent / PopularAlbums)
 */
function renderCardsOnPage(card_count, api_adress, ids_list, card_format) {
    for (let i = 0; i < card_count; i++) {
        fetch(`https://api.spotify.com/v1/` + api_adress + '/' + ids_list[i], {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ` + localStorage['token'],
            }
        })  
            //Обработка возможных ответов API
            .then((response) => {
                if (response.status == 200){
                    return response.json()
                }
                else if (response.status == 401){
                    alert('Sorry. You should re-authenticate')
                    return Promise.reject(response)
                }
                else if (response.status == 403){
                    alert('Auth error. Please try login again')
                    return Promise.reject(response)
                }
                else if (response.status == 404){
                    alert('Sorry. One or more of the albums dont responding. Page will be reload')
                    return Promise.reject(response)
                }
                
            })
            //При успешном запросе происходит отрисовка полученной карточки в зависимотси от её типа (трэк, альбом или подкаст)
            .then((data) => {
                if (card_format == 'StartMainContent') appendStartMainContent(data);
                if (card_format == 'SectionContent') appendSectionContent(data);
                if (card_format == 'PopularAlbums') appendPopularAlbums(data);
            })
            //при ошибке, необходимо зайти заново в свой аккаунт и обновить страницу
            .catch((data) =>{
                window.location = "http://localhost:8888/";
            });
    }
}

/**
 * Отрисовывает карточки треков на главной странице в случайном порядке.
 * @param {Array} data - данные из запроса для отрисовки карточки
 */
function appendStartMainContent(data) {
    console.log(data)
    let track_card = document.createElement('a');
    track_card.classList.add('main-playlist');
    track_card.href = "#"
    track_card.innerHTML = `
                    <img class="main-playlist-img" src="${data['album']['images'][1]['url']}">
                    <span class="main-playlist-span">${data['name']}</span>
                    <div class="play-btn">
                      <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                      </svg>
                    </div>
                  `
    document.querySelector('.start-main-content').append(track_card)
}

/**
 * Отрисовывает карточки подкастов на главной странице в случайном порядке.
 * @param {Array} data - данные из запроса для отрисовки карточки
 */
function appendSectionContent(data) {
    let release_date = new Date(data['release_date']).toUTCString().split(" ")
    let episode_card = document.createElement('a');
    episode_card.classList.add('card-container');
    episode_card.setAttribute('target', "_blank")
    episode_card.href = data['external_urls']['spotify'];
    episode_card.innerHTML = `
            <img class="card-image" src="${data['images'][1]['url']}">
            <h3 class="card-head">${data['name']}</h3>
            <div>
              <span class="card-date">${release_date[1]} ${release_date[2]}.</span>
              <span class="card-len"> ${Math.round(data['duration_ms'] / 60000)} МИН.</span>
            </div>    
          `
    document.querySelector('.section-content').append(episode_card)
}

/**
 * Отрисовывает карточки популярных альбомов на главной странице в случайном порядке.
 * @param {Array} data - данные из запроса для отрисовки карточки
 */
function appendPopularAlbums(data) {
    let episode_card = document.createElement('a');
    episode_card.classList.add('card-container');
    episode_card.setAttribute('target', "_blank")
    episode_card.href = data['external_urls']['spotify'];
    episode_card.innerHTML = `
            <img class="card-image" src="${data['images'][1]['url']}">
            <h3 class="card-head">${data['name']}</h3>
            <div>
              <span class="card-date">${data['artists'][0]['name']}</span>
              <span class="card-len"></span>
            </div>    
          `
    document.querySelector('.popular-albums').append(episode_card)
}

export { renderCardsOnPage }