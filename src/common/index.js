export const writeCookie = (key, value, days = 30) => {
  let date = new Date();

  date.setDate(date.getDate() + days)

  let cookie = document.cookie = `${key}=${value}; expires=${date.toGMTString()}; path=/`;

  return cookie;
}

export const getCookie = (cookieName) => {
  const re = new RegExp(`(?<=${cookieName}=)[^;]*`);

  try {
    let cookie = document.cookie.match(re)[0];
    return cookie;
  } catch (error) {
    console.log("cookie not found");
    return false;
  }
}