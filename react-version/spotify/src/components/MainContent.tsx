import { ids } from './data/data.js'
import StartMainContent from './StartMainContent'
import SectionContent from './SectionContent';
import PopularAlbums from './PopularAlbums';

function MainBlock() {
    const whiteColor = {
        color: 'white'
      };
      const greyColor = {
        color: '#b2b2b2'
      }
      return(
        <main className="main">
    
          <section className="section-start-content">
            <h2 className="start-main-content-title">
            </h2>
            <div className="start-main-content">
                {
                    shuffle(ids.track_list).slice(0, 6).map((item) => {
                        return(
                            <StartMainContent id={item} ></StartMainContent>
                        )
                    })
                }
                
            </div>
          </section>
    
          <section>
            <div className="section-head-container">
              <a href="#" className="section-head" style={whiteColor}><h2>Выпуски для тебя</h2></a>
              <a href="#" className="section-head-all" style={greyColor}><span>ВСЕ</span></a>
            </div>
            <div className="section-content">
                {
                    shuffle(ids.episodes_list).slice(0, 8).map((item) => {
                        return(
                            <SectionContent id={item} ></SectionContent>
                        )
                    })
                }
            </div>
          </section>
    
          <section>
            <div className="section-head-container">
              <a href="#" className="section-head" style={whiteColor}><h2>Популярные альбомы</h2></a>
              <a href="#" className="section-head-all" style={greyColor}><span>ВСЕ</span></a>
            </div>
            <div className="section-content popular-albums">
                {
                    shuffle(ids.popular_albums_list).slice(0, 8).map((item) => {
                        return(
                            <PopularAlbums id={item} ></PopularAlbums>
                        )
                    })
                }
            </div>
          </section>
        </main>
      );
}

/** 
     * Функция, которая перемешивает элементы массива (случаным образом).
     * @description Возвращает перемешанный массив
     * @param {Array} array - исходный массив
     * @returns {Array} - перемешанный массив
*/
function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

/**
    * Устанавливает заголовок на главной странице в зависимости от времени суток 
    * @returns - ничего не возвращает (void)
*/
function setPageTitle() {
    let title = document.querySelector('.start-main-content-title')
    const time = new Date().getHours()
    if (time >= 6 && time < 12) {
        title ? title.innerHTML = "Доброе утро": title = null;
    } else if (time >= 12 && time <= 18) {
        title ? title.innerHTML = "Добрый день": title = null;
    } else if (time >= 18 && time <= 23) {
        title ? title.innerHTML = "Добрый вечер": title = null;
    } else {
        title ? title.innerHTML = "Доброй ночи": title = null;
    }
}

export default MainBlock;
