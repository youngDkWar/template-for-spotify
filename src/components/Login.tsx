import "../static/css/login.css";
import { loginUrl } from "./spotify";

/**
 * Эта страница и стили взяты из примера с официального сайта api.spotify.com
 * @returns ReactComponent
 */

function Login() {
  return (
    <div className="login">
      <img className="login__img" src="images/main_logo_white.svg" alt="Spotify logo" />
      <a className="login__a" href={loginUrl}>Войти с помощью Spotify</a>
    </div>
  );
}

export default Login;
