// 事件封装
(function(window) {
    // 封装绑定事件的兼容处理
    window.EventUtil = {
        // 参数：
        // 1、绑定对象 2、绑定事件 3、绑定方法 4、捕获or冒泡
        addEvent: function(element, type, handler, isCapture = false) {
            if (element.addEventListener) {
                // 标准浏览器
                element.addEventListener(type, handler, isCapture);
            } else if (element.attachEvent) {
                // ie6-8的事件绑定
                element.attachEvent('on' + type, function() {
                    // 使绑定方法中this == event.target 且具有 event 参数
                    return handler.call(element, window.event);
                });
            }
        },
        // 获取事件对象 兼容处理
        getEvent: function(e) {
            return e || window.event;
        },
        // 获取事件源对象
        getTarget: function(e) {
            return e.target || e.srcElement;
        },
        // 阻止事件冒泡
        stopPropagation: function(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        },
        // 阻止默认行为
        preventDefault: function(e) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        }
    };

})(window || {});