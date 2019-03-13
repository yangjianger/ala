module.exports = {
    getWeek: function (day) {
        let xingqi = "";
        switch (day) {
            case 0:
                xingqi = "日";
                break;
            case 1:
                xingqi = "一";
                break;
            case 2:
                xingqi = "二";
                break;
            case 3:
                xingqi = "三";
                break;
            case 4:
                xingqi = "四";
                break;
            case 5:
                xingqi = "五";
                break;
            case 6:
                xingqi = "六";
                break;
            default:
                xingqi = "系统错误！"
        }
        return xingqi;
    },
    checkTel: function(tel){
        let reg = /^[1-9]{1}[0-9]{10}$/; //验证规则
        if(reg.test(tel)){
            return true;
        }
        return false;

    }
};