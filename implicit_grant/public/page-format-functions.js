/** 
     * Функция, которая перемешивает элементы массива (случаным образом).
     * @description Возвращает перемешанный массив
     * @param {Array} array - исходный массив
     * @returns {Array} - перемешанный массив
*/
function shuffle(array) {
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
        title.innerHTML = "Доброе утро"
    } else if (time >= 12 && time <= 18) {
        title.innerHTML = "Добрый день"
    } else if (time >= 18 && time <= 23) {
        title.innerHTML = "Добрый вечер"
    } else {
        title.innerHTML = "Доброй ночи"
    }
}

export {setPageTitle, shuffle}