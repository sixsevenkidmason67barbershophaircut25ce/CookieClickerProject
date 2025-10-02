let Cookies = 0;
let CookieGain = 1;
window.onload = changeCookieDisplay()
function changeCookieDisplay() {
    document.getElementById('CookieDisplay').innerHTML = 'Cookies: ' + Cookies;
    document.getElementById('CookieGainDisplay').innerHTML = 'Cookie Gain: ' + CookieGain;
}
function onCookieButtonClick() {
    Cookies += CookieGain;
    changeCookieDisplay();
}
function increaseCookieGain(gain) {
    cost = 50 * gain;
    if (Cookies >= cost) {
        CookieGain += gain;
        Cookies -= cost;
        changeCookieDisplay();
    }
}
