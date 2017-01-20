/**
 * Created by Administrator on 2017-1-20.
 */
define([],function () {
    var config = {
        requestUrl:"/am",
        requestUrlFlowBank:"http://192.168.68.23:8100",//流浪银行
        requestUrlAudition:"http://192.168.68.21:8082/smiweb",//
        commonUrl:"http://192.168.68.21:9999/common",
        libUrl:"http://192.168.68.21:9999/lib",
        SmiWebV2016Url:"",
        domain:".xingmeihui.com",
    };
    return config;
});
require();