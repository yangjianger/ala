let defaultCity = "";
try {
    defaultCity = localStorage.city
}catch (e) {

}

export default {
    city: defaultCity || "上海"
}