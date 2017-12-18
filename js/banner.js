$(function() {
        //代码初始化
        var size = $("#ulbox li").size();
        for (var i = 1; i <= size; i++) {
            var li = "<li>" + i + "</li>";
            $("#olbox").append(li);
        };
        //手动控制轮播效果
        $("#ulbox li").eq(0).show();
        $("#olbox li").eq(0).addClass("active");
        $("#olbox li").mouseover(function() {
                $(this).addClass("active").siblings().removeClass("active");
                var index = $(this).index();
                i = index;
                $("#ulbox li").eq(index).fadeIn(300).siblings().fadeOut(300);
            })
            //自动
        var i = 0;
        var t = setInterval(move, 3000);
        //核心向右的函数
        function move() {
            i++;
            if (i == size) {
                i = 0;
            }
            $("#olbox li").eq(i).addClass("active").siblings().removeClass("active");
            $("#ulbox li").eq(i).fadeIn(300).siblings().fadeOut(300);

        }
        //定时器的开始与结束
        $("#box").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(move, 3000)
        })
    })