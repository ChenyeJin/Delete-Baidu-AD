// ==UserScript==
// @name         去广告/去除百度推广以及无用功能
// @namespace    http://tampermonkey.net/
// @version      0.123
// @description  去掉百度推广以及辣鸡推广
// @author       papipapipia
// @match        http://www.baidu.com/s*
// @match        http://news.baidu.com/s*
// @match        https://www.baidu.com/s*
// @match        https://news.baidu.com/s*
// @grant        none
// ==/UserScript==
window.onload = function(){

    var lj = {
        "tips":	"1是打开 0或者其他是关闭",
        "info":
        [
            {
                "ad":	1,//推广
                "right":1,//右边
                "baike":	1,//百科
                "img":	1,//图片
                "news":	1,//新闻
                "tieba":	1,//贴吧
                "win10":	1,//Win10
                "video":	1,//视频
                "comic":	1,//漫画
                "stock":	1,//股票
                "software":	1,//软件
                "map":	1//地图
            }
        ]
    };
    var info = eval(lj);

    function getElementsByClassName(a, b) {
        if (a.getElementsByClassName) {
            return a.getElementsByClassName(b);
        } else {
            return function c(m, k) {
                if (k == null) {
                    k = document;
                }
                var h = [], g = k.getElementsByTagName("div"), d = g.length, l = new RegExp("(^|\\s)" + m + "(\\s|$)"), f, e;
                for (f = 0, e = 0; f < d; f++) {
                    if (l.test(g[f].className)) {
                        h[e] = g[f];
                        e++;
                    }
                }
                return h;
            }(b, a);
        }
    }

    function Id_hide(id){
        $(id).css('display', 'none');
        console.log(id + ' > 已经干掉了哦');
    }

    function baidu_i_fuck_you(){
        if(info.info[0].ad == 1){//推广
            var fuck;
            if (document.all || document.getElementById){
                fuck = document.getElementsByTagName("div");
            }
            for(var i = 0;i < fuck.length;i++){
                if(fuck[i].id !== ""){var fuck_id = fuck[i].id;}
                if(fuck_id !== "head"  && fuck_id !== "mCon"  && fuck_id !== "page"  && fuck_id !== "foot" && fuck_id.length == 4 || fuck_id.length == 6 || fuck_id.length == 27){Id_hide('div#' + fuck_id);}
            }
        }
        if(info.info[0].ad == 1){Id_hide('.ct-content');}//商业推广
        if(info.info[0].right == 1){Id_hide('#content_right');}//右边
        if(info.info[0].baike == 1){Id_hide('.c-border');}//百科(经验、翻译)
        if(info.info[0].img == 1){Id_hide('#ala_img_results');
                                  Id_hide('.op-img-covers-desktop-cont');
                                  Id_hide('.c-showurl');}//图片
        if(info.info[0].news == 1){Id_hide('.c-offset');}//新闻
        if(info.info[0].tieba == 1){Id_hide('.op-tieba-general-maintable');
                                    Id_hide('.op-tieba-star-maintable');
                                    Id_hide('.op-tieba-general-lookmore.op-tieba-general-mainpl');}//贴吧
        if(info.info[0].win10 == 1){Id_hide('.opt_software_showarea');}//Win10
        if(info.info[0].video == 1){Id_hide('.c-row.zx-tv-video-topinfo');
                                    Id_hide('.op-zx-new-tvideo-drlt');}//视频
        if(info.info[0].comic == 1){Id_hide('.op_cartoon.click-parent-reward');}//漫画
        if(info.info[0].stock == 1){Id_hide('.op_shares_simple');}//股票
        if(info.info[0].software == 1){Id_hide('table.c-table.op_pcsoft_table');
                                       Id_hide('.c-gap-top');}//软件
        if(info.info[0].map == 1){Id_hide('.op_map_twoplace_table');}//地图
    }

    var ischange;
    setInterval (function (){
        if(document.location.href !== ischange){baidu_i_fuck_you();}
        ischange = document.location.href;
    }, 500);

};
