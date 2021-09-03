$('#forecast').hide();
var btn = document.querySelector('button');
var txt = document.querySelector('input');
btn.onclick = function (){
    var val = txt.value;
    //发送ajax
    var xhr = new XMLHttpRequest();
    xhr.open('get','http://wthrcdn.etouch.cn/WeatherApi?city=' + val);
    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status == 200){
            // console.log(xhr.responseXML);   //xml的字符串

            var resp = xhr.responseXML.querySelector('resp');
            var city = resp.querySelector('city').innerHTML;
            document.querySelector('h2').innerHTML =  city;

            var updatetime = resp.querySelector('updatetime').innerHTML;
            document.getElementById('updatetime').innerHTML = '更新时间：' + updatetime;

            var wendu = resp.querySelector('wendu').innerHTML;
            document.getElementById('wendu').innerHTML =  wendu + '℃';

            //下面的表格
            //yesterday
            var y_date = resp.querySelector('yesterday').querySelector('date_1').innerHTML;
            document.getElementById('y_date').innerHTML = y_date ;
            var y_high = resp.querySelector('high_1').innerHTML;
            document.getElementById('y_high').innerHTML = y_high ;
            var y_low = resp.querySelector('low_1').innerHTML;
            document.getElementById('y_low').innerHTML = y_low ;

            //today
            var forecast = resp.querySelector('forecast').innerHTML;
            document.getElementById('forecast').innerHTML = forecast ;


            var element=$("p weather date").eq(0);
            document.getElementById('t_date').innerHTML = $(element).html();
            var element=$("p weather high").eq(0);
            document.getElementById('t_high').innerHTML = $(element).html();
            var element=$("p weather low").eq(0);
            document.getElementById('t_low').innerHTML = $(element).html();

            var element=$("p weather date").eq(1);
            document.getElementById('f1_date').innerHTML = $(element).html();
            var element=$("p weather high").eq(1);
            document.getElementById('f1_high').innerHTML = $(element).html();
            var element=$("p weather low").eq(1);
            document.getElementById('f1_low').innerHTML = $(element).html();


            var element=$("p weather date").eq(2);
            document.getElementById('f2_date').innerHTML = $(element).html();
            var element=$("p weather high").eq(2);
            document.getElementById('f2_high').innerHTML = $(element).html();
            var element=$("p weather low").eq(2);
            document.getElementById('f2_low').innerHTML = $(element).html();

            var element=$("p weather date").eq(3);
            document.getElementById('f3_date').innerHTML = $(element).html();
            var element=$("p weather high").eq(3);
            document.getElementById('f3_high').innerHTML = $(element).html();
            var element=$("p weather low").eq(3);
            document.getElementById('f3_low').innerHTML = $(element).html();

            var element=$("p weather date").eq(4);
            document.getElementById('f4_date').innerHTML = $(element).html();
            var element=$("p weather high").eq(4);
            document.getElementById('f4_high').innerHTML = $(element).html();
            var element=$("p weather low").eq(4);
            document.getElementById('f4_low').innerHTML = $(element).html();
        }
    }
    xhr.send();
}

// 点击出现盒子，盒子内容为热门城市
$('#remen').hide();
var remen = document.getElementById('remen');
txt.onfocus = function (){
    remen.style.display = 'block';
}
$(document).ready(function (){
    $('section').click(function (){
        txt.value = $(this).html();
        remen.style.display = 'none';
    })
})
$('button').click(function (){
    remen.style.display = 'none';
})
$('.box').click(function (){
    remen.style.display = 'none';
})
$('.h1').click(function (){
    remen.style.display = 'none';
})
$('.weather').click(function (){
    remen.style.display = 'none';
})











