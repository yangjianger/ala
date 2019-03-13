let defaultCity = "";
let defaultProvince = "";
let defaultDistrict = "";
let defaultCityCode = "";
let latitude = "";
let longitude = "";
let userInfo = {};
let cityInfo = {};
let currentDate = new Date();
try {
    cityInfo = JSON.parse(localStorage.cityInfo) || {};
    defaultCity = cityInfo.city;
    defaultProvince = cityInfo.province;
    defaultDistrict = cityInfo.district;
    defaultCityCode = cityInfo.defaultCityCode;
    latitude = cityInfo.latitude;
    longitude = cityInfo.longitude;
    userInfo = localStorage.userInfo;
}catch (e) {

}

export default {
    city: defaultCity || "北京市",
    province: defaultProvince || "北京市",
    district: defaultDistrict || "海淀区",
    latitude: latitude,
    longitude: longitude,
    romeType: 1, // 1全日房  2钟点房
    userInfo: userInfo || {},
    defaultCityCode:defaultCityCode || "",
    startTime: currentDate.getTime(),
    endTime: currentDate.getTime() + 86400 * 1000,
}