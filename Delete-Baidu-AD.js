// ==UserScript==
// @name         去广告/去除百度推广以及无用功能
// @namespace    http://tampermonkey.net/
// @version      0.130
// @description  去掉百度推广以及辣鸡推广
// @author       papipapipia <suningyo@gmail.com> telegram:https://telegram.me/suningyo
// @match        https://www.baidu.com/s?*
// @match        https://m.baidu.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    // Your code here...

    var lj = {//1是打开
        time:	5000,//周期时间,单位毫秒,建议 >= 5000毫秒(5秒)
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
            rs:	0,//底部推荐
            m_ad:	1//手机推广
        },
        width:	800
        /*
        大于这个宽度大概属于 pc 具体自己调整
        平板走 m.baidu.com 这个域名好了 :q
        */
    };
    if(document.body.clientWidth > lj.width)
    {
        var nav = document.getElementById("s_tab");
        var newLink = document.createElement('a');
        var newText = document.createTextNode('Github');
        newLink.appendChild(newText);
        newLink.setAttribute('href',"https://github.com/papipapipia/Delete-Baidu-AD");
        nav.appendChild(newLink);
    }
    function Id_del(id){$(id).remove();console.log(id + ' > done');}
    function baidu_i_fuck_you(){
        if(lj.info.ad == 1 && document.body.clientWidth > lj.width){
            /*
            顽固牛皮鲜 (mdzz
            大概思路就是通过枚举div来实现过滤
            */
            var fuck = document.getElementById("content_left").getElementsByTagName("div");
            for(var i = 0;i < fuck.length;i++){
                var f_i = fuck[i];
                var fuck_text = f_i.innerHTML;
                if(fuck_text.indexOf('广告</span>') > -1 || fuck_text.indexOf('免费咨询') > -1 /*|| fuck_text.indexOf('装逼') > -1*/)//可以手动添加关键词 建议两个字以上
                {
                    var fuck_id = f_i.id;
                    var fuck_style = f_i.style.visibility;
                    if(fuck_id.indexOf('wrapper') > -1 || fuck_id.indexOf('container') > -1)
                    {
                        //白名单
                    }
                    else if(fuck_id > 0 || fuck_style == 'visible')
                    {
                        Id_del('#' + fuck_id);
                        var fuck_classname = f_i.className;
                        Id_del('.' + fuck_classname);
                    }
                }
            }
        }
        if(lj.info.right == 1){Id_del('#content_right');}//右边
        if(lj.info.baike == 1){Id_del('.result-op.xpath-log');}//百科(经验、翻译)
        if(lj.info.img   == 1){Id_del('.op-img-covers-desktop-cont');}//图片
        if(lj.info.news  == 1){Id_del('.c-offset');}//新闻
        if(lj.info.tieba == 1){Id_del('.op-tieba-general-maintable');Id_del('.op-tieba-star-maintable');Id_del('.op-tieba-general-lookmore.op-tieba-general-mainpl');}//贴吧
        if(lj.info.win10 == 1){Id_del('.opt_software_showarea');}//Win10
        if(lj.info.video == 1){Id_del('.c-row.zx-tv-video-topinfo');Id_del('.op-zx-new-tvideo-drlt');}//视频
        if(lj.info.comic == 1){Id_del('.op_cartoon.click-parent-reward');}//漫画
        if(lj.info.stock == 1){Id_del('.op_shares_simple');}//股票
        if(lj.info.soft  == 1){Id_del('.c-gap-top');}//软件
        if(lj.info.map   == 1){Id_del('.op_map_twoplace_table');}//地图
        if(lj.info.rs   == 1){Id_del('#rs');}//底部推荐
        //////////////////////////// 华丽的分割线 ////////////////////////////
        if(lj.info.m_ad   == 1){Id_del('.ec_wise_ad');Id_del('#ec_wise_adtopnum');Id_del('.ec_adv_last.ec_resitem_card');}//手机端广告
        setTimeout(baidu_i_fuck_you, lj.time);
    }
    baidu_i_fuck_you();

})();
