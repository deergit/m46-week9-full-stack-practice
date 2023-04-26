export const writeCookie = (key, value, days = 30) => {
  let date = new Date();

  date.setDate(date.getDate() + days);

  let cookie = document.cookie = `${key}=${value}; expires=${date.toGMTString()}; path=/; samesite=Strict`;

  return cookie;
}

export const getCookie = (cookieName) => {
  const re = new RegExp(`(?<=${cookieName}=)[^;]*`);

  try {
    let cookie = document.cookie.match(re)[0];

    return cookie;
  } catch (error) {
    console.log("cookie not found");
    console.log(error);

    return false;
  }
}

export const deleteCookie = (cookieName) => {
  writeCookie(cookieName, "", -1);
}