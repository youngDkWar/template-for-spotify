import { main } from './main.js'

(function () {

    var stateKey = 'spotify_auth_state';

    /**
     * Obtains parameters from the hash of the URL
     * @return Object
     */
    function getHashParams() {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    }

    /**
     * Generates a random string containing numbers and letters
     * @param  {number} length The length of the string
     * @return {string} The generated string
     */
    function generateRandomString(length) {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };

    var params = getHashParams();
    /**
     * Получаем и сохраняем токен доступа
     */
    var access_token = params.access_token,
      state = params.state,
      storedState = localStorage.getItem(stateKey);

    localStorage['token'] = access_token;

    if (access_token && (state == null || state !== storedState)) {
        alert('Вы не авторизовались')
        window.location = "http://localhost:8888/"
    } else {
      localStorage.removeItem(stateKey);
      if (access_token) {
        $.ajax({
          url: 'https://api.spotify.com/v1/me',
          headers: {
            'Authorization': 'Bearer ' + access_token
          },
          success: function (response) {
            /**
             * В случае успешной авторизации и успешного получения данных о пользователе
             * скрываем блок с формой авторизации и отрисовывем главную страницу.
             */
            console.log(response)
            
            main(true);
            document.querySelector('.profile-name').innerHTML = response['display_name'];

            $('#login').hide();
            $('#loggedin').show();
          },
          /**
           * При получении ошибки получения данных о пользователе, выводим сообщение об ошибке
           *  и страница обновляется.
           */
          error: function (response){
              alert(response)
          }
        });
      } else {
        $('#login').show();
        $('#loggedin').hide();
      }

      document.getElementById('login-button').addEventListener('click', function () {

        var client_id = '73330061e4264af5b493274bd485b596'; // Your client id
        var redirect_uri = 'http://localhost:8888'; // Your redirect uri

        var state = generateRandomString(16);

        localStorage.setItem(stateKey, state);
        var scope = 'user-read-private user-read-email user-read-currently-playing';

        var url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        url += '&state=' + encodeURIComponent(state);

        window.location = url;
        localStorage['url'] = url;
      }, false);
    }
  })();
