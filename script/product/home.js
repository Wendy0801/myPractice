/**
 * Created by Administrator on 2017-1-24.
 */
var home = {
    init:function () {
        common.showConfirm(localStorage.name);
    }
}
$(function () {
    home.init();
})