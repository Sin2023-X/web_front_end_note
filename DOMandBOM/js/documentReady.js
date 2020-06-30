/*
    封装绑定文档加载完成后的事件处理程序
    @callback function 页面加载完成后的回调函数
*/
document.myReady = function(callback) {
    // 封装标准浏览器和ie浏览器
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback);
    } else if (document.attachEvent) {
        // 兼容ie8及以下的浏览器
        document.attachEvent('onreadystatechange', function() {
            // 当文档的状态变为：interactive表示，文档dom对象可以进行访问
            if (document.readyState == "interactive") {
                callback(window.event);
            }
        });
    } else {
        window.onload = callback;
    }
};