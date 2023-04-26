export const writeCookie = (key, value, days = 30) => {
  let date = new Date();

  date.setDate(date.getDate() + days)

  let cookie = document.cookie = `${key}=${value}; expires=${date.toGMTString()}; path=/`;

  return cookie;
}

