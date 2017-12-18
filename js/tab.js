$(function() {
        var $navs = $('#tab_lis a'), 
            $sections = $('.section'),
            $window = $(window);      
           var  navLength = $navs.length - 1;

        $window.on('scroll', function() {

            var scrollTop = $window.scrollTop(),
                len = navLength;

            for (; len > -1; len--) {
                var that = $sections.eq(len);
                if (scrollTop >= that.offset().top-93) {
                    $navs.removeClass('current').eq(len).addClass('current');
                    break;
                }
            }
        });
        $navs.on('click', function(e) {
            e.preventDefault();
              $('html, body').animate({ 'scrollTop': $($(this).attr('href')).offset().top-93}, 400);
            
        });
        $('.info ul li a').mouseenter(function(){
            $(this).children('.text_info').addClass('text_current')
        }).mouseleave(function(){
            $(this).children('.text_info').removeClass('text_current')
        });
        $("#del").click(function(){
        	$("#section4").slideToggle(500);
        });
        var _index=0;
        var _flag=true;
        $("#btnLeft").click(function(){
        	if(_flag){
        		_flag=false;  
        		_index++;
        		if(_index==$(".newIno .infoRight ul li").length-3){
        			_index--;
        		}
        		var _left = -284*_index;
        		$(".newIno .infoRight ul").animate({
        			left:_left+"px"
        		},function(){
        			_flag=true;
        		})
        	}
        })
        $("#btnRight").click(function(){
        	if(_flag){
				_flag=false;        		
        		_index--;
        		if(_index<=0){
        			_index=0;
        		}
        		var _right = -284*_index;
        		$(".newIno .infoRight ul").animate({
        			left:_right+"px"
        		},function(){
        			_flag=true;
        		})
        	}
        })
    })
