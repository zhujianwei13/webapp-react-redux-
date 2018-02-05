// JavaScript Document

(function(win, doc){
    function setFontSize() {
        // 获取window 宽度
        // zepto实现 $(window).width()就是这么干的
      var docEl = doc.documentElement;
       var clientWidth = docEl.clientWidth;
        if(clientWidth<=750){
             docEl.style.fontSize = 100 * (clientWidth /750) + 'px';
    	}else{
    		 docEl.style.fontSize =100 +"px";
    		}
    }
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var timer = null;
    win.addEventListener(resizeEvt, function () {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }, false);  
    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
        }
    }, false);
    // 初始化
    setFontSize();
}(window, document));
