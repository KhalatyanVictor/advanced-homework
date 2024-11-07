const cookieName = document.getElementById("firstText");
const cookieValue = document.getElementById("lastText");
const cookieExpireDate = document.getElementById("expireDateText");
const submitBtn = document.getElementById("submitBtn");
const getCookieBtn = document.getElementById("getCookieBtn");
const getCookieFirstName = document.getElementById("cookieFirstName");
const deleteCookieName = document.getElementById("deleteCookieName");
const deleteCookieBtn = document.getElementById("deleteCookieBtn");

function setCookie(name, value, expireDate) {
  const date = new Date();
  date.setTime(date.getTime() + expireDate * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      console.log(cookieValue);
    }
  }
  return null;
}

submitBtn.addEventListener("click", () => {
  setCookie(cookieName.value, cookieValue.value, cookieExpireDate.value);
  cookieName.value = "";
  cookieValue.value = "";
  cookieExpireDate.value = "";
});

getCookieBtn.addEventListener("click", () => {
  getCookie(getCookieFirstName.value);
  getCookieFirstName.value = "";
});

deleteCookieBtn.addEventListener("click", () => {
  deleteCookie(deleteCookieName.value);
  deleteCookieName.value = "";
});
