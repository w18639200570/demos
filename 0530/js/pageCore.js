function getLastXl() {
    var n = document.querySelector("#scriptIdXl");
    -1 !== xhPzgeId.join(",").indexOf(window._xlgo_opt.pid) ? (window._xlgo_opt.oHead.removeChild(n),
        n = null) : window.location.href = "http://www.xinhuanet.com/webSkipping.htm"
}
!function() {
    var n = window.location
        , e = n.href
        , c = n.href.match(new RegExp(/_\d{5,}\.(ht|sht)/g));
    if (c && c.length) {
        var t = null
            , i = document.createElement("script")
            , s = e.split("?")[0].split("//")[1].split("/")[0].split("www.").reverse()[0]
            , h = e.match(/\d{5,}/g)
            , o = h ? h[0] : null
            , w = o ? o.slice(-2) + "" : null
            , a = e.match(/\/(\d{4,}\S*)\//g)[0]
            , x = a.substr(1, a.length - 2).replace(/((-)|(\/))/g, "")
            , m = x.slice(0, 4) + "/" + x.slice(4, 6) + "/" + x.slice(6, 8)
            , u = Math.floor((new Date - new Date(m)) / 864e5)
            , l = -1 !== e.indexOf("content_")
            , d = "xinhuanet.com" !== s && "news.cn" !== s && -1 !== "bj.xinhuanet.com,tj.xinhuanet.com,he.xinhuanet.com,sx.xinhuanet.com,ln.xinhuanet.com,jl.xinhuanet.com,sh.xinhuanet.com,js.xinhuanet.com,zj.xinhuanet.com,ah.xinhuanet.com,fj.xinhuanet.com,jx.xinhuanet.com,sd.xinhuanet.com,ha.xinhuanet.com,hb.xinhuanet.com,hn.xinhuanet.com,gd.xinhuanet.com,gx.xinhuanet.com,hq.xinhuanet.com,cq.xinhuanet.com,sc.xinhuanet.com,gz.xinhuanet.com,yn.xinhuanet.com,tibet.xinhuanet.com,sn.xinhuanet.com,gs.xinhuanet.com,qh.xinhuanet.com,nx.xinhuanet.com,xj.xinhuanet.com,nmg.xinhuanet.com,hlj.xinhuanet.com,bt.xinhuanet.com,wx.xinhuanet.com,csj.xinhuanet.com,haixinews.com.cn,hsdnews.cn,tibet.news.cn/english,xizang.news.cnbj.news.cn,tj.news.cn,he.news.cn,sx.news.cn,ln.news.cn,jl.news.cn,sh.news.cn,js.news.cn,zj.news.cn,ah.news.cn,fj.news.cn,jx.news.cn,sd.news.cn,ha.news.cn,hb.news.cn,hn.news.cn,gd.news.cn,gx.news.cn,hq.news.cn,cq.news.cn,sc.news.cn,gz.news.cn,yn.news.cn,tibet.news.cn,sn.news.cn,gs.news.cn,qh.news.cn,nx.news.cn,xj.news.cn,nmg.news.cn,hlj.news.cn,bt.news.cn,wx.news.cn,csj.news.cn,haixinews.com.cn,hsdnews.cn,tibet.news.cn/english,xizang.news.cn".indexOf(s)
            , g = u >= 356
            , p = u >= 730;
        o && (l ? window.location.href = "http://www.xinhuanet.com/webSkipping.htm" : d && g && (i.src = "http://www.xinhuanet.com/global/pageWhiteList/pid" + w + ".js"),
            i.id = "scriptIdXl",
            t = document.querySelector("head"),
            t.appendChild(i),
            i = null,
            window._xlgo_opt = {
                pid: o + "",
                isContent: l,
                isCompanys: d,
                isOneYear: g,
                isTwoYear: p,
                oHead: t
            })
    }
}(window);
