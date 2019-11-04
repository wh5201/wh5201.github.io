$(function (){
  $('#menu_logo img').mouseover(function () { 
      $(this).animate({width:"40",height:"40"},500)
    }).mouseout(function(){
        $(this).animate({width:"50",height:"50"},500)
    })


    // 导航
    $('#menu_nav ul li').hover(function (){
        $(this).toggleClass('active')
        $('.menu_tab').eq($(this).index()).stop().toggle()
        })
    $('.menu_tab').hover(function (){
        $('.menu_tab').eq($(this).index()).stop().show()
            },function (){
        $('.menu_tab').eq($(this).index()).stop().hide()
            })
        

    //菜单
    $('#banner_menu_wrap li').hover(function (){
        $(this).toggleClass('active');
        $('.banner_menu_content').eq($(this).index()).stop().toggle()
        })
        
    $('.banner_menu_content').hover(function (){
        $('.banner_menu_content').eq($(this).index()).stop().show()
            },function (){
        $('.banner_menu_content').eq($(this).index()).stop().hide()
            })
        
    $('.banner_menu_content ul a').hover(function (){
        $(this).toggleClass('active')  
        })

    //轮播图
        var index=0;
        var timer;
        //鼠标移入改变数字样式和图片
        
        $('#big_banner_pic_wrap ol li').mouseenter(function(){
            $(this).addClass('active').siblings().removeClass('active')//切换数字样式
            index=$(this).index();            
            $('#big_banner_pic').stop().animate({'left':-1226*index},1000);//改变轮播图片的距离，实现切换图片
            $('#big_banner_pic_wrap ol li').removeClass('active').eq(index).addClass('active')
        })
        //轮播图
        function chart(){ 
            clearInterval(timer); //清除定时器
                timer=window.setInterval(function(){
                index++;
                if(index>3){
                    index=0;
                }
                $('#big_banner_pic_wrap ol li').eq(index).mouseenter().mouseleave()//模拟鼠标进入 
            },2000)
        }
        
        chart()//调用定时器
        //鼠标停在图片上停止轮播，离开继续
        $('#big_banner_pic_wrap,#big_banner_change_next,#big_banner_change_prev').mouseenter(function (){
            clearInterval(timer);//清除定时器
        }).mouseleave(function (){
            chart()
        })

        //图片切换箭头
        $('#big_banner_change_prev').hover(function (){
            $(this).toggleClass('active')
        })
        $('#big_banner_change_next').hover(function (){
            $(this).toggleClass('active')
        })

        //点击切换图片
        function Next(){
            index++;
            if(index>3){
                index=0;
            }           
            $('#big_banner_pic').stop().animate({'left':-1226*index},1000);//改变轮播图片的距离，实现切换图片
            $('#big_banner_pic_wrap ol li').removeClass('active').eq(index).addClass('active')   
        }
        function Prev(){
            index--;
            if(index<0){
                index=3;
            }           
            $('#big_banner_pic').stop().animate({'left':-1226*index},1000);//改变轮播图片的距离，实现切换图片
            $('#big_banner_pic_wrap ol li').removeClass('active').eq(index).addClass('active')   
        }
        $('#big_banner_change_next').mousedown(function (){  
            Next()
        })
        $('#big_banner_change_prev').mousedown(function (){  
            Prev()
        })


        //开房购买
        $('#head_other_wrap #head_other ul li').hover(function (){
            $(this).toggleClass('active')
        })
        $('.head_other_ad').hover(function (){
            $(this).toggleClass('active')
        })
       

        //明星单品轮播图
        // $('#big_banner_pic_wrap ol li').mouseenter(function(){
        //     $(this).addClass('active').siblings().removeClass('active')//切换数字样式
        //     index=$(this).index();            
        //     $('#big_banner_pic').stop().animate({'left':-1226*index},1000);//改变轮播图片的距离，实现切换图片
        //     $('#big_banner_pic_wrap ol li').removeClass('active').eq(index).addClass('active')
        // })
        // //轮播图
        // function chart(){ 
        //     clearInterval(timer); //清除定时器
        //         timer=window.setInterval(function(){
        //         index++;
        //         if(index>3){
        //             index=0;
        //         }
        //         $('#big_banner_pic_wrap ol li').eq(index).mouseenter().mouseleave()//模拟鼠标进入 
        //     },2000)
        // }
        
        // chart()//调用定时器
    var starUl=$('#head_hot_goods_content ul')
    $('#head_hot_goods_next').on('click',function (){
        starUl.stop().animate({'left':-1226},1000);
        $(this).css('color','#e0e0e0').siblings().css('color','#bebebe')
    }).hover(function (){
        $(this).toggleClass('active')
    })
    $('#head_hot_goods_prave').on('click',function (){
        starUl.stop().animate({'left':0},1000);
        $(this).css('color','#e0e0e0').siblings().css('color','#bebebe')
    }).hover(function (){
        $(this).toggleClass('active')
    })
    $('#head_hot_goods_content ul li').hover(function (){
        $(this).toggleClass('active')
    })
    //智能硬件

    $('.floor_goods_wrap_li').hover(function (){
        $(this).toggleClass('active')
    })

    //底部
    $('.foot_top ul li').hover(function (){
        $(this).toggleClass('active')
        $('.font_top_i').removeClass('active')
    })
    $('.foot_bottom_l dl dd').hover(function (){
        $(this).toggleClass('active')
    })

    $('#foot_box #foot_wrap .foot_bottom .foot_bottom_r span').hover(function (){
        $(this).toggleClass('active')
    })


    //二维码
   $('#my_code').hover(function (){
       $('#code').stop().toggle()
   })
   $('#code').hover(function (){
    $(this).stop().toggle()
   })
    

   //返回顶部
   $(window).scroll(function (){
       if($(window).scrollTop()<1100){
           $('.uparrow').stop().hide(0)
       }if ($(window).scrollTop()>800){
            $('.uparrow').stop().show(0)

       }
   })
   //简历
   $('.resume').on('mousedown',function(){
       $('#resume').stop().toggle()
   })
})