/**
 * Created by Administrator on 2017-2-10.
 */
var common = {
    init: function () {
        this.showConfirm();
    },
    showConfirm:function (text) {
        var $div = '<div class="show-confirm"> ' +
            '<div class="show-container"> ' +
            '<div class="show-text"> ' +
            '<span>'+ text +'</span> ' +
            '</div> ' +
            '<div class="show-button"> ' +
            '<button type="button" class="cancel" id="cancel">取消</button> ' +
            '<button type="button" class="sure" id="sure">确定</button> ' +
            '</div> ' +
            '</div> ' +
            '</div>'
        $('body').append($div);
        $('.show-confirm').show();
        $('#cancel').on('tap',function () {
            $('.show-confirm').hide()
        });
        $('#sure').on('tap',function () {
            $('.show-confirm').hide()
        })

    }
}
$(function () {
    common.init();
})
