import { scopes } from "./data/scope"
import {clientId} from "./data/ClientID";
import {authEndpoint, redirectUri, url} from "./data/endpoints"

/**
 * Получение токена доступа из строки со страницы авторизации
 */

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: { [parts: string]: string }, item) => {
      const parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

interface QueryProps {
  path: string;
  method: string;
}

/**
 * Все API запросы. Функция возвращает методы для получения данных в spotify.
 */
export const Spotify = () => { 
  const token = localStorage.getItem("token"); 


  const isLogOut = () => { /* Проверка на выход */
    return !token;
  }

  /**
   * Это универсальная функция, которая принимает путь и тип запроса и возвращает данные, полученные по этому API-пути
   * в формате json.
   */
  const callEndpoint = async ({ path, method }: QueryProps) => {
    return await (
      await fetch(`${url}${path}`, {
        headers: {
          Authorization: `Bearer ` + token,
        },
        method,
      }).then((response) => {
        if (response.status === 200){
          return response;
        }
        else if (response.status === 401) {
          localStorage.removeItem("token");
          window.location.href = window.location.host + "/login";
        } 
        else if (response.status === 403) {
          alert('Auth error. Please try login again')
          localStorage.removeItem("token");
          window.location.reload();
        } 
        else if (response.status === 404) {
          window.location.reload();
        } 
        else {
          localStorage.removeItem("token");
          window.location.reload();
        }
        return response;
      })
    ).json();
  };

  /** 
   * Треки на главной странице в самом вверху 
  */
  const mainTracks = async ( trackID: string) => { 
    return await callEndpoint({
      path: `/tracks/${trackID}`,
      method: "GET",
    });
  };

  /** 
   * Лист с подкастами на главной странице
  */
  const sectionEpisodes = async ( trackID: string) => {
    return await callEndpoint({
      path: `/episodes/${trackID}`,
      method: "GET",
    });
  };

  /** 
   * Лист с популярными альбомами на главной странице
  */
  const popularAlbums = async ( trackID: string) => {
    return await callEndpoint({
      path: `/albums/${trackID}`,
      method: "GET",
    });
  };

  /** 
   * Информация о пользователе 
  */
  const aboutMe = async () => {
    return await callEndpoint({
      path: `/me`,
      method: "GET",
    });
  };

  return {
    isLogOut,
    mainTracks,
    sectionEpisodes,
    popularAlbums,
    aboutMe
  };
};
