 var localHandler = function(data){
        alert('远程js数据是：' + data);
 };

 var url = "http://10.1.73.47:8088/echarts_mavenweb/signin.do?name=zcc21&callback=localHandler";
 // 创建script标签，设置其属性
 var script = document.createElement('script');
 script.setAttribute('src', url);
 // 把script标签加入head，此时调用开始
 document.getElementsByTagName('head')[0].appendChild(script);