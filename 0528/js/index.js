/**
 *
 @Author: MiniHui
 @Date: Mon Apr 29 2019 08:24:05 GMT+0800 (CST)
 *
 */
$(function () {

    var bgmusic = bgMusic('#music');
    // touch拖拽点击事件
    var oBox = $('#box');
    var oBoxItem = $('#box .item');
    var y = 65;
    var x = 7;
    var rotexy = {
        active: false
    };
    oBox.on("touchstart", function (ev) {
        //获取触摸位置
        oBox.removeClass('boxAnim');
        var oEvent = ev || event;
        var disX = ev.changedTouches[0].clientX - y;
        var disY = ev.changedTouches[0].clientY - x;
        rotexy.x = ev.changedTouches[0].pageX;
        rotexy.y = ev.changedTouches[0].pageY;
        $('.mask').removeClass('active');
        $('.maskitem').removeClass('active');

        oBox.on("touchmove", function (ev) {
            //3d旋转立方体
            var oEvent = ev || event;
            x = (disY - ev.touches[0].clientY) % 360;
            y = (ev.touches[0].clientX - disX) % 360;
            oBox.attr('style', 'transform:perspective(800px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)');
        });

        oBox.on("touchend", function (ev) {

            ev.stopPropagation();
            ev.preventDefault();
            // 获取当前位置
            var currentX = ev.changedTouches[0].pageX;
            var currentY = ev.changedTouches[0].pageY;

            // 判断是否点击了每个面，执行程序
            if (Math.abs(currentX - rotexy.x) < 6 && Math.abs(currentY - rotexy.y) < 6) {

                end(ev);
            }
        });

        return false;
    });

    function end(ev) {

        var elem = ev.srcElement.dataset.thisindex;
        var newUrl = $.trim($('.maskitem').eq(elem).text());
        // console.log($.trim($('.maskitem').eq(elem).text()))
        if(newUrl){
            location.href = newUrl;
        }
        // var _thismaskItem = $('.maskitem').removeClass('active').eq(elem);

        // $('.mask').addClass('active');
        // _thismaskItem.addClass('active');

        /* var swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 1000, //1秒切换一次
            },
            pagination: {
                el: '.swiper-pagination',
            },
        }); */

        /* if (_thismaskItem.hasClass('hasVideo')) {
            bgmusic.pause();
            var videoId = 'video' + elem;
            var thisvideoplay = videoplay(videoId);
            $('.backbtn').bind('click', function () {
                 thisvideoplay.pause();
              });
            return false
        }
        */
        /* if (_thismaskItem.hasClass('onlymusic')) {
            bgmusic.pause();
            var thismusicplay = musicsPaly({
                id: '#onlymusic-audio',
                musics: [{
                    tit: "首次阐述中国梦",
                    pics: "./http://www.xinhuanet.com/politics/dxszqc/index/mobile/images/testPic.png",
                    musicUrl: "./copy/article1.mp3"
                }, {
                    tit: "国家好、民族好、大家才会好",
                    pics: "./http://www.xinhuanet.com/politics/dxszqc/index/mobile/images/testPic.png",
                    musicUrl: "./copy/article2.mp3"
                }, {
                    tit: "接过历史的接力棒",
                    pics: "./http://www.xinhuanet.com/politics/dxszqc/index/mobile/images/testPic.png",
                    musicUrl: "./copy/article3.mp3"
                }, {
                    tit: "把人民共和国建设得更加繁荣富强",
                    pics: "./http://www.xinhuanet.com/politics/dxszqc/index/mobile/images/testPic.png",
                    musicUrl: "./copy/article4.mp3"
                }, {
                    tit: "共享幸福和荣光",
                    pics: "./http://www.xinhuanet.com/politics/dxszqc/index/mobile/images/testPic.png",
                    musicUrl: "./copy/article5.mp3"
                }]
            });
             $('.backbtn').bind('click', function () {
                  thismusicplay.pause();
              });
         } */

        /* if (!!$('.music').hasClass('music')) {
          } */
    }

    // 返回按钮
    $('.backbtn').bind('click', function () {

        bgmusic.play();

        $('.mask').removeClass('active');
        $('.maskitem').removeClass('active');
        $('.nexpagecon').removeClass('active');
    });

    //信息页面按钮
    /* $('.nextpagebtn').bind('tap', function () {
        $('.nexpagecon').addClass('active')
    }); */

    // 播放视频

    /* function videoplay(videoId) {
        var videoId = videoId,
            $this = $(this),
            winw = $(window).width(),
            videoh = $(window).height();
         var opts = {
            "nativeControlsForTouch": false,
            controls: false,
            width: winw + 'px',
            // height:videoh+'px',
        };
         var _player = videojs(videoId, opts);
        _player.preload();
        _player.play();
        return _player
    } */

    //背景音乐播放 bgmusic

    function bgMusic(id) {
        var music = $(id);
        var audios = $(id + '-audio')['0'];

        autoPlayMusic(audios);
        music.bind('tap', function () {
            if (music.hasClass('stopped')) {
                $(this).removeClass('stopped');

                audios.play();
            } else {
                $(this).addClass('stopped');
                audios.pause();
            };
        });

        return audios;
    }

    //播放多个音频

    function autoPlayMusic(audios) {
        audios.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audios.play();
        }, false);
    }

    /* function musicsPaly(opt) {
        var id = opt.id;
        var musicData = opt.musics;
        var _music = $(id);
        var _audios = $(id)['0'];
        var _source = $(id + 'source')[0];
         var $onlymusicViweTit = $('.onlymusicViweTit');
        var $onlymusicViwePic = $('.onlymusicViwePic img');
        var $onlymusicViwePicwarp = $('.onlymusicViwePic');
         //几个播放按钮
        var $stauseMusic = $('.stauseMusic');
        var $nextMusic = $('.nextMusic');
        var $preMusic = $('.preMusic');
         var musicIndex = 0;
        var musiclength = musicData.length;
         $onlymusicViwePicwarp.addClass('rotateElem');
        $stauseMusic.addClass('onlymusicPlay');
          init(_audios, 0);
        _audios.loop = false; //禁用循环
          //下一个音乐
        $nextMusic.on('tap', function () {
            (musicIndex < musiclength - 1) ? (musicIndex += 1) : (musicIndex = 0);
            init(_audios, musicIndex);
            $stauseMusic.addClass('onlymusicPlay');
        });
        //上一个音乐
        $preMusic.on('tap', function () {
            (musicIndex >= 1) ? (musicIndex -= 1) : (musicIndex = musiclength - 1);
            init(_audios, musicIndex);
            $stauseMusic.addClass('onlymusicPlay');
        });
        //播放结束
        var endedStatus = _audios.addEventListener('ended', function () {
            (musicIndex < musiclength - 1) ? (musicIndex += 1) : (musicIndex = 0);
            init(_audios, musicIndex);
        });
           // 更换播放按钮状态
        // $stauseMusic.on('tap',function(){
        // 	if($stauseMusic.hasClass('onlymusicPlay')){
        // 		$stauseMusic.removeClass('onlymusicPlay');
        // 		$onlymusicViwePicwarp.removeClass('rotateElem');
        // 		_audios.pause();
        // 	}else{
        // 		$stauseMusic.addClass('onlymusicPlay');
        // 		$onlymusicViwePicwarp.addClass('rotateElem');
        // 		_audios.play();
        // 	};
        // });

        function init(audios, index) {
            $onlymusicViweTit.html(musicData[index].tit);
            $onlymusicViwePic.html(musicData[index].pics);
            _source.src = musicData[index].musicUrl;
            audios.load();
            autoPlayMusic(audios);
        };
           return _audios;
     }
    */
});
//# sourceMappingURL=maps/index.js.map
