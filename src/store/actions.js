export default {
    changeCity(ctx, city){
        ctx.commit('changeCity', city)
    },

    setUserInfo(ctx, userInfo){
        ctx.commit('setUserInfo', userInfo)
    },
}