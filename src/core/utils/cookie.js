import Cookies from "js-cookie";

const setCookie = (tokens) => {
  const { accessToken, refreshToken } = tokens;
  Cookies.set('accessToken', accessToken, { expires: 1, path: '/', secure: true });
  Cookies.set('refreshToken', refreshToken, { expires: 30, path: '/', secure: true });
};

function getCookie(name) {
  return Cookies.get(name);
}
function deleteCookie(name) {
  Cookies.remove(name, { path: '/' });
}
export {setCookie ,getCookie ,deleteCookie} 