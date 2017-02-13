/**
 * Created by Administrator on 2017-1-24.
 */
var home = {
    init:function () {
        common.showConfirm('欢迎您，'+localStorage.name);
    }
}
$(function () {
    home.init();
})