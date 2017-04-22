             $('.lunbo .yuandian li').on('click',function(){   //小圆点样式  鼠标经过小圆点图片切换
                  var index = $(this).index();
                  $(this).addClass('active').siblings().removeClass('active');
                  $('.slides-list').animate({left: (index * -395) + 'px'});
              });

              $('.jiantou .left').on('click',function(){    //点击左箭头图片循环
                var activePrev = $('.lunbo .yuandian .active').prev();
                console.log(activePrev)
                if(activePrev.length === 0){
                  var activePrev = $('.lunbo .yuandian li').last();
                }
                activePrev.click();
              });
                  
                   $('.lunbo .yuandian li').on('mouseover',function(){   //小圆点样式  鼠标经过小圆点图片切换
                  var index = $(this).index();
                  $(this).addClass('active').siblings().removeClass('active');
                  $('.slides-list').animate({left: (index * -395) + 'px'});
              });


               $('.jiantou .right').on('click',function(){   //点击右箭头图片循环
                var activePrev = $('.lunbo .yuandian .active').next();
                if(activePrev.length === 0){
                  var activePrev = $('.lunbo .yuandian li').first();
                }
                activePrev.click();
              });


               setInterval(function(){  //定时器
               $('.jiantou .right').click(); 
               },3000)                  //3秒执行一次单击事件
              //$('.lunbo').on('mouseenter', function(){ //箭头显示

                //$('.jiantou').show(); });
              //$('.lunbo').on('mouseleave', function(){  //箭头隐藏

               // $('.jiantou').hide();});
       