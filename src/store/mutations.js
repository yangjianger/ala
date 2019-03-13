export default {
    changeCity(state, cityInfo){

        state.province          = cityInfo.province;
        state.city              = cityInfo.city;
        state.district          = cityInfo.district;
        state.defaultCityCode   = cityInfo.defaultCityCode;

        try {
            localStorage.cityInfo = cityInfo;
        }catch (e) {

        }
    },
    changeRoomType(state, room_type){
        state.romeType = room_type;

    },
    setUserInfo(state, userInfo){
        state.userInfo = userInfo;
        try {
            localStorage.userInfo = userInfo;
        }catch (e) {

        }
    },
    setCity(state, cityInfo){

        state.province          = cityInfo.province;
        state.city              = cityInfo.city;
        state.district          = cityInfo.district;
        state.defaultCityCode   = cityInfo.defaultCityCode;
        try {
            localStorage.cityInfo = JSON.stringify(cityInfo);
        }catch (e) {

        }
    },

    setStartTime(state, startTime){
        state.startTime             = startTime;
    },
    setEndTime(state, endTime){
        state.endTime               = endTime;
    }
}