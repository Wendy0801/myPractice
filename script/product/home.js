/**
 * Created by Administrator on 2017-1-24.
 */
var home = {
    init:function () {
        common.showConfirm('欢迎您，'+localStorage.name+'<br/>项目正在建设中，感谢您的关注！');
    }
}
$(function () {
    home.init();
})