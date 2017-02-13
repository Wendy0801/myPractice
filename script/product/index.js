/**
 * Created by Administrator on 2017-1-20.
 */
var login = {
    init:function () {
        $('#login').on('tap',function () {
            var name,pass;
            // window.location.href ='./module/home.html';
            // name = $('#name').val();
            // localStorage.name = name;
            name = $('#name').val();
            pass = $('#pass').val();
            if (name && pass){
                if (pass == '666666'){
                    localStorage.name = name;
                    window.location.href ='./module/home.html';
                } else {
                    common.showConfirm('密码错误，请重新输入！');
                }
            } else {
                common.showConfirm('信息填写不完整！');
                return false;
            }
        })
    }
}
$(function () {
    login.init();
})