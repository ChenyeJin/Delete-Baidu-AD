// ==UserScript==
// @name         去广告/去除百度推广以及无用功能
// @namespace    http://tampermonkey.net/
// @version      0.127
// @description  去掉百度推广以及辣鸡推广
// @author       papipapipia <suningyo@gmail.com>
// @match        http://www.baidu.com/s?*
// @match        https://www.baidu.com/s?*
// @grant        none
// ==/UserScript==
var nav = document.getElementById("s_tab");
var newLink = document.createElement('a');
var newText = document.createTextNode('Github');
newLink.appendChild(newText);
newLink.setAttribute('href',"https://github.com/papipapipia/Delete-Baidu-AD");
nav.appendChild(newLink);

var lj = {//1是打开
    time:   10000,//周期时间,单位毫秒,建议 >5 秒
    info:
    {
        ad:	    1,//推广
        right:  1,//右边
        baike:	0,//百科
        img:	1,//图片
        news:	1,//新闻
        tieba:	1,//贴吧
        win10:	1,//Win10
        video:	1,//视频
        comic:	1,//漫画
        stock:	1,//股票
        soft:	1,//软件
        map:	1,//地图
        rs:     0//底部推荐
    }
};

function Id_hide(id){$(id).css('display', 'none');console.log(id + ' > done');}
function baidu_i_fuck_you(){
    if(lj.info.ad == 1){//顽固牛皮鲜 (mdzz
        var fuck = document.getElementsByTagName('div');
        for(var i = 0;i < fuck.length;i++){
            if(fuck[i].id !== ''){
                var fuck_id = fuck[i].id;
                if(fuck_id !== 'head'  && fuck_id !== 'mCon'  && fuck_id !== 'page'  && fuck_id !== 'foot' && fuck_id.length == 4 || fuck_id.length == 6 || fuck_id.length == 27){Id_hide('div#' + fuck_id);}
            }
        }
    }
    if(lj.info.right == 1){Id_hide('.rrecom-btn-parent.rrecom-btn-s.rrecom-btn-moving.rrecom-btn-click');}//右边
    if(lj.info.baike == 1){Id_hide('.result-op.xpath-log');}//百科(经验、翻译)
    if(lj.info.img   == 1){Id_hide('.op-img-covers-desktop-cont');}//图片
    if(lj.info.news  == 1){Id_hide('.c-offset');}//新闻
    if(lj.info.tieba == 1){Id_hide('.op-tieba-general-maintable');Id_hide('.op-tieba-star-maintable');Id_hide('.op-tieba-general-lookmore.op-tieba-general-mainpl');}//贴吧
    if(lj.info.win10 == 1){Id_hide('.opt_software_showarea');}//Win10
    if(lj.info.video == 1){Id_hide('.c-row.zx-tv-video-topinfo');Id_hide('.op-zx-new-tvideo-drlt');}//视频
    if(lj.info.comic == 1){Id_hide('.op_cartoon.click-parent-reward');}//漫画
    if(lj.info.stock == 1){Id_hide('.op_shares_simple');}//股票
    if(lj.info.soft  == 1){Id_hide('.c-gap-top');}//软件
    if(lj.info.map   == 1){Id_hide('.op_map_twoplace_table');}//地图
    if(lj.info.rs   == 1){Id_hide('#rs');}//底部推荐
    setTimeout(baidu_i_fuck_you, lj.time);
}
baidu_i_fuck_you();
